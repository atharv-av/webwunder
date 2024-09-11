'use client'

import { createClient } from '@/lib/supabase/client'
import { getLoggedInUser } from '@/services/auth/getters'
import { User, QueryData } from '@supabase/supabase-js'
import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext<
    | {
          isAdmin: boolean
          auth: User | undefined
          user:
              | (UserProfile & {
                    roles: { role: RoleEnum }[]
                })
              | undefined
          isLoading: boolean
          refetchUser: () => Promise<void>
      }
    | undefined
>(undefined)

export const UserProvider = (props: Props) => {
    const [user, setUser] = useState<{
        auth: User
        user: UserProfile & {
            roles: { role: RoleEnum }[]
        }
    }>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const supabase = createClient()
    const [isAdmin, setIsAdmin] = useState(false)

    const fetchUser = async () => {
        setIsLoading(true)
        try {
            const {auth:authUser, profile:profileUser, isAdmin } = await getLoggedInUser()

            if (authUser.user && profileUser.data) {
                console.log('DBUSER: ', profileUser.data)
                setIsAdmin(isAdmin)
                setUser({ auth: authUser.user, user: profileUser.data })
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <UserContext.Provider
            value={{
                isAdmin: isAdmin,
                user: user?.user,
                auth: user?.auth,
                isLoading: isLoading,
                refetchUser: fetchUser,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const user = useContext(UserContext)
    return user
}
