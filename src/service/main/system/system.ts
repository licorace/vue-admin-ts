import hyRequest from "../../index"
import { IDataType } from "../../types"

//获取数据
export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

//url: /users/id
//删除数据
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url: url
  })
}

//新增数据
export function createPageData(url: string, newData: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

//修改数据
export function editPageData(url: string, editData: any) {
  return hyRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
