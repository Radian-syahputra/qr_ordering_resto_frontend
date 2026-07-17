import {useQuery} from '@tanstack/react-query'
import { useEffect } from 'react'
import {me} from '@/api/authApi'
import { useAuthStore } from '@/store/authStore'


export const useAuth = () => {
    const setUser = useAuthStore((state) => state.setUser )

    const {data, isLoading, isError} = useQuery({
        queryKey : ['me'],
        queryFn : me,
        staleTime : Infinity,
        retry : false
    })

    useEffect(() => {
        if(data) {
            setUser(data)
        }
    },[data, setUser])

    return {isLoading, isError}
}
