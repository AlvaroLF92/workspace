// @ts-nocheck
import { useMutation, useQueryClient } from "react-query";
import { createFormation, deleteFormation, updateFormation } from "services/formationsService";

export function useCreateFormation(callback) {
  const queryClient = useQueryClient();
  return useMutation(
    createFormation,

      {
        onMutate: async formationData => {

          await queryClient.cancelQueries('formations');

          const previousFormations = newInstance(queryClient.getQueryData('formations'));

          queryClient.setQueryData('formations', old => [...old, formationData])

          return previousFormations;
        },

        onError: (err, variables, previousValue) =>
          {queryClient.setQueryData('formations', previousValue)},

        onSuccess: (data, variables, context) => {
          callback();
        },

        onSettled: () => {
          queryClient.invalidateQueries('formations')
        },
      }
    )
}

export function useRemoveFormation() {
    const queryClient = useQueryClient();
    return useMutation(
        (formationId) => deleteFormation(formationId),

        {
          onMutate: async formationId => {

            await queryClient.cancelQueries('formations');

            const previousFormations = newInstance(queryClient.getQueryData('formations'));

            queryClient.setQueryData('formations', old => (old.filter(formationObj => formationObj.id !== formationId)))

            return previousFormations;
          },

          onError: (err, variables, previousValue) =>
            {queryClient.setQueryData('formations', previousValue)},

          onSettled: () => {
            queryClient.invalidateQueries('formations')
          },
        }
      )
}
export function useSetFormationVisible() {
    const queryClient = useQueryClient();
    return useMutation(
        updateFormation,
    
        {
          onMutate: async (formationData) => {
            
            await queryClient.cancelQueries('formations');
        
            const previousFormations = newInstance(queryClient.getQueryData('formations'));
        
            queryClient.setQueryData('formations', old => (old.filter((formationObj) => {
                if(formationObj.id === formationData.id) {
                    formationObj.visible = formationObj.visible ? 0 : 1;
                }
                return formationObj;
            })))
        
            return previousFormations;
          },
      
          onError: (err, variables, previousValue) =>
            {queryClient.setQueryData('formations', previousValue)},
      
          onSettled: () => {
            queryClient.invalidateQueries('formations')
          },
        }
      )
}
export function useUpdateFormation(callback) {
    const queryClient = useQueryClient();
    return useMutation(
        updateFormation,
    
        {
          onMutate: async (formationData) => {
            
            await queryClient.cancelQueries('formations');
        
            const previousFormations = newInstance(queryClient.getQueryData('formations'));
        
            queryClient.setQueryData('formations', old => (old.filter((formationObj) => {
                if(formationObj.id === formationData.id) {
                    formationObj = formationData;
                }
                return formationObj;
            })))
        
            return previousFormations;
          },
      
          onError: (err, variables, previousValue) =>
            {queryClient.setQueryData('formations', previousValue)},

            onSuccess: (data, variables, context) => {
              callback();
            },
      
          onSettled: () => {
            queryClient.invalidateQueries('formations')
          },
        }
      )
}

const newInstance = (object) => {
    return JSON.parse(JSON.stringify(object));
}