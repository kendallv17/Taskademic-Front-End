export async function createTask(SupabaseClient, taskData){
    const { data, error } = await SupabaseClient
    .from('Period_Tasks')
    .insert(taskData)
    .select('*')
    if(error) throw new Error(`An error ocurred while creating the task, ${error}.`)
    return data
  
}
export async function deleteTask(SupabaseClient, task_id){
    const { error } = await SupabaseClient
    .from('Period_Tasks')
    .delete()
    .eq('task_id', task_id)
    if(error) throw new Error(`An error ocurred while deleting your task, ${error}.`)
}
export async function updateTaskStatus(SupabaseClient, taskId, newStatus){
    const { error } = await SupabaseClient
    .from('Period_Tasks')
    .update({ status: newStatus })
    .eq('task_id', taskId)
    if(error) throw new Error(`An error ocurred while updating the task status, ${error}.`)
}

export async function fetchTasks(SupabaseClient, periodId){
    const { data, error } = await SupabaseClient
    .from('Period_Tasks')
    .select('*')
    .eq('period_id', periodId)
    if(error) throw new Error(`An error ocurred while fetching the current period data, ${error}.`)
    return data
}