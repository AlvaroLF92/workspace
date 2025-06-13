// @ts-nocheck
import { useMutation, useQueryClient } from "react-query";
import { createClass, deleteClass, updateClass } from "services/classesService";

export function useCreateClass(callback) {
  const queryClient = useQueryClient();
  return useMutation(
    createClass,

      {
        onMutate: async classData => {

          await queryClient.cancelQueries('classes');

          const previousClasses = newInstance(queryClient.getQueryData('classes'));

          queryClient.setQueryData('classes', old => [...old, classData])

          return previousClasses;
        },

        onError: (err, variables, previousValue) =>
          {queryClient.setQueryData('classes', previousValue)},

        onSuccess: (data, variables, context) => {
          callback();
        },

        onSettled: () => {
          queryClient.invalidateQueries('classes')
        },
      }
    )
}

export function useRemoveClass() {
    const queryClient = useQueryClient();
    return useMutation(
        (classId) => deleteClass(classId),

        {
          onMutate: async classId => {

            await queryClient.cancelQueries('classes');

            const previousClasses = newInstance(queryClient.getQueryData('classes'));

            queryClient.setQueryData('classes', old => (old.filter(classObj => classObj.id !== classId)))

            return previousClasses;
          },

          onError: (err, variables, previousValue) =>
            {queryClient.setQueryData('classes', previousValue)},

          onSettled: () => {
            queryClient.invalidateQueries('classes')
          },
        }
      )
}
export function useSetClassVisible() {
    const queryClient = useQueryClient();
    return useMutation(
        updateClass,
    
        {
          onMutate: async (classData) => {
            
            await queryClient.cancelQueries('classes');
        
            const previousClasses = newInstance(queryClient.getQueryData('classes'));
        
            queryClient.setQueryData('classes', old => (old.filter((classObj) => {
                if(classObj.id === classData.id) {
                    classObj.visible = classObj.visible ? 0 : 1;
                }
                return classObj;
            })))
        
            return previousClasses;
          },
      
          onError: (err, variables, previousValue) =>
            {queryClient.setQueryData('classes', previousValue)},
      
          onSettled: () => {
            queryClient.invalidateQueries('classes')
          },
        }
      )
}
export function useUpdateClass(callback) {
    const queryClient = useQueryClient();
    return useMutation(
        updateClass,
    
        {
          onMutate: async (classData) => {
            
            await queryClient.cancelQueries('classes');
        
            const previousClasses = newInstance(queryClient.getQueryData('classes'));
        
            queryClient.setQueryData('classes', old => (old.filter((classObj) => {
                if(classObj.id === classData.id) {
                    classObj = classData;
                }
                return classObj;
            })))
        
            return previousClasses;
          },
      
          onError: (err, variables, previousValue) =>
            {queryClient.setQueryData('classes', previousValue)},

            onSuccess: (data, variables, context) => {
              callback();
            },
      
          onSettled: () => {
            queryClient.invalidateQueries('classes')
          },
        }
      )
}

const newInstance = (object) => {
    return JSON.parse(JSON.stringify(object));
}