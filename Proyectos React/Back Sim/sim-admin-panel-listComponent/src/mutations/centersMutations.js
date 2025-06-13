// @ts-nocheck
import { useMutation, useQueryClient } from "react-query";
import { createCenter, deleteCenter, updateCenter } from "services/centersService";

export function useCreateCenter(callback) {
  const queryClient = useQueryClient();
  return useMutation(
    createCenter,

      {
        onMutate: async centerData => {

          await queryClient.cancelQueries('centers');

          const previousCenters = newInstance(queryClient.getQueryData('centers'));

          queryClient.setQueryData('centers', old => [...old, centerData])

          return previousCenters;
        },

        onError: (err, variables, previousValue) =>
          {queryClient.setQueryData('centers', previousValue)},

        onSuccess: (data, variables, context) => {
          callback();
        },

        onSettled: () => {
          queryClient.invalidateQueries('centers')
        },
      }
    )
}

export function useRemoveCenter() {
    const queryClient = useQueryClient();
    return useMutation(
        (centerId) => deleteCenter(centerId),

        {
          onMutate: async centerId => {

            await queryClient.cancelQueries('centers');

            const previousCenters = newInstance(queryClient.getQueryData('centers'));

            queryClient.setQueryData('centers', old => (old.filter(center => center.id !== centerId)))

            return previousCenters;
          },

          onError: (err, variables, previousValue) =>
            {queryClient.setQueryData('centers', previousValue)},

          onSettled: () => {
            queryClient.invalidateQueries('centers')
          },
        }
      )
}
export function useSetCenterActive() {
    const queryClient = useQueryClient();
    return useMutation(
        updateCenter,
    
        {
          onMutate: async (centerData) => {
            
            await queryClient.cancelQueries('centers');
        
            const previousCenters = newInstance(queryClient.getQueryData('centers'));
        
            queryClient.setQueryData('centers', old => (old.filter((center) => {
                if(center.id === centerData.id) {
                    center.active = center.active ? 0 : 1;
                }
                return center;
            })))
        
            return previousCenters;
          },
      
          onError: (err, variables, previousValue) =>
            {queryClient.setQueryData('centers', previousValue)},
      
          onSettled: () => {
            queryClient.invalidateQueries('centers')
          },
        }
      )
}
export function useUpdateCenter(callback) {
    const queryClient = useQueryClient();
    return useMutation(
        updateCenter,
    
        {
          onMutate: async (centerData) => {
            
            await queryClient.cancelQueries('centers');
        
            const previousCenters = newInstance(queryClient.getQueryData('centers'));
        
            queryClient.setQueryData('centers', old => (old.filter((center) => {
                if(center.id === centerData.id) {
                    center = centerData;
                }
                return center;
            })))
        
            return previousCenters;
          },
      
          onError: (err, variables, previousValue) =>
            {queryClient.setQueryData('centers', previousValue)},

            onSuccess: (data, variables, context) => {
              callback();
            },
      
          onSettled: () => {
            queryClient.invalidateQueries('centers')
          },
        }
      )
}

const newInstance = (object) => {
    return JSON.parse(JSON.stringify(object));
}