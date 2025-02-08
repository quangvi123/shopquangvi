import React, { useEffect } from 'react'
import Item from './Item';
// import { useGetTodoQuery } from '../../../redux/createAPI';


export default function PassTodo() {
  console.log(1111);
  
  // console.log('useGetTodoQuery()',useGetTodoQuery);

  // const { data, error, isLoading, isFetching, isSuccess } = useGetTodoQuery();
  // console.log('useGetTodoQuery()', data);
// 
    let dataLoad = data?.map((item, index) => {
        return (
          <Item key={item.id} index={index} {...item }/>
        );
      });
  return (
    <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
    {dataLoad}
  </tbody>
  )
}