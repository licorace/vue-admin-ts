import { useStore } from "@/store"

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  // name = "coderwhy"
  // !name -> false
  // !!name -> true
  // !! 的意思是把一个值变成Boolean值,相当于Boolean()
  return !!permissions.find((item) => item === verifyPermission)
}
