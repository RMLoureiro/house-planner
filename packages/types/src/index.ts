export interface User {
  id: string
  name: string
  email: string
  role: 'ADMIN' | 'MEMBER'
  householdId: string | null
  createdAt: string
}

export interface Household {
  id: string
  name: string
  inviteCode: string
  users: User[]
  createdAt: string
}

export interface Expense {
  id: string
  title: string
  amount: number
  category: ExpenseCategory
  paidById: string
  paidBy: User
  splitType: 'EQUAL' | 'CUSTOM'
  splits: ExpenseSplit[]
  householdId: string
  receiptUrl: string | null
  date: string
  createdAt: string
}

export interface ExpenseSplit {
  id: string
  expenseId: string
  userId: string
  user: User
  amount: number
}

export interface GroceryItem {
  id: string
  name: string
  quantity: number
  priority: Priority
  category: string | null
  completed: boolean
  store: string | null
  householdId: string
  createdAt: string
}

export interface Chore {
  id: string
  title: string
  assignedToId: string
  assignedTo: User
  dueDate: string
  completed: boolean
  recurring: boolean
  recurrence: Recurrence | null
  householdId: string
  createdAt: string
}

export interface Bill {
  id: string
  title: string
  amount: number
  dueDate: string
  paid: boolean
  recurring: boolean
  invoiceUrl: string | null
  householdId: string
  createdAt: string
}

export interface Note {
  id: string
  title: string
  content: string
  pinned: boolean
  householdId: string
  updatedAt: string
  createdAt: string
}

export type ExpenseCategory =
  | 'GROCERIES' | 'UTILITIES' | 'RENT' | 'INTERNET'
  | 'CLEANING' | 'REPAIRS' | 'ENTERTAINMENT' | 'MISC'

export type Priority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'
export type Recurrence = 'DAILY' | 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY'