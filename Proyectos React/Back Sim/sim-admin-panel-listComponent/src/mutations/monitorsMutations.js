// @ts-nocheck
import { useMutation, useQueryClient } from "react-query";
import { createMonitor, deleteMonitor, updateMonitor } from "services/monitorsService";

export function useCreateMonitor(callback) {
  const queryClient = useQueryClient();
  return useMutation(
      createMonitor,

      {
        onMutate: async monitorData => {

          await queryClient.cancelQueries('monitors');

          const previousMonitors = newInstance(queryClient.getQueryData('monitors'));

          queryClient.setQueryData('monitors', old => [...old, monitorData])

          return previousMonitors;
        },

        onError: (err, variables, previousValue) =>
          {queryClient.setQueryData('monitors', previousValue)},

        onSuccess: (data, variables, context) => {
          callback();
        },

        onSettled: () => {
          queryClient.invalidateQueries('monitors')
        },
      }
    )
}

export function useRemoveMonitor() {
    const queryClient = useQueryClient();
    return useMutation(
        (monitorId) => deleteMonitor(monitorId),

        {
          onMutate: async monitorId => {

            await queryClient.cancelQueries('monitors');

            const previousMonitors = newInstance(queryClient.getQueryData('monitors'));

            queryClient.setQueryData('monitors', old => (old.filter(monitor => monitor.id !== monitorId)))

            return previousMonitors;
          },

          onError: (err, variables, previousValue) =>
            {queryClient.setQueryData('monitors', previousValue)},

          onSettled: () => {
            queryClient.invalidateQueries('monitors')
          },
        }
      )
}
export function useSetMonitorActive() {
    const queryClient = useQueryClient();
    return useMutation(
        updateMonitor,
    
        {
          onMutate: async (monitorData) => {
            
            await queryClient.cancelQueries('monitors');
        
            const previousMonitors = newInstance(queryClient.getQueryData('monitors'));
        
            queryClient.setQueryData('monitors', old => (old.filter((monitor) => {
                if(monitor.id === monitorData.id) {
                    monitor.active = monitor.active ? 0 : 1;
                }
                return monitor;
            })))
        
            return previousMonitors;
          },
      
          onError: (err, variables, previousValue) =>
            {queryClient.setQueryData('monitors', previousValue)},
      
          onSettled: () => {
            queryClient.invalidateQueries('monitors')
          },
        }
      )
}
export function useUpdateMonitor(callback) {
    const queryClient = useQueryClient();
    return useMutation(
      updateMonitor,
    
        {
          onMutate: async (monitorData) => {
            
            await queryClient.cancelQueries('monitors');
        
            const previousMonitors = newInstance(queryClient.getQueryData('monitors'));
        
            queryClient.setQueryData('monitors', old => (old.filter((monitor) => {
                if(monitor.id === monitorData.id) {
                    monitor = monitorData;
                }
                return monitor;
            })))
        
            return previousMonitors;
          },
      
          onError: (err, variables, previousValue) =>
            {queryClient.setQueryData('monitors', previousValue)},

            onSuccess: (data, variables, context) => {
              callback();
            },
      
          onSettled: () => {
            queryClient.invalidateQueries('monitors')
          },
        }
      )
}

const newInstance = (object) => {
    return JSON.parse(JSON.stringify(object));
}