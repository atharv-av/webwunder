import type { Database as DB } from './database.types'

declare global {
    type Database = DB
    type UserProfile = DB['public']['Tables']['profiles']['Row']
    type Project = DB['public']['Tables']['projects']['Row']
    type Role = DB['public']['Tables']['roles']['Row']
    type RoleEnum =  DB["public"]["Enums"]["role"]
}
