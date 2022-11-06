export async function createPeriod(SupabaseClient, PeriodData){
    const { data, error } = await SupabaseClient
    .from('College_Period')
    .insert(PeriodData)
    .select('id')
    if(error) throw new Error(`An error ocurred while creating the college period, ${error}. Please try again`)
    return data
}
export async function createCourses(SupabaseClient, coursesData){
    let requests = coursesData.map(course => SupabaseClient
        .from('Period_Courses')
        .insert(course))
    let resultArray = Promise.all(requests).catch(error => { throw new Error(`An error ocurred while creating the college period, ${error}. Please try again`)});
    return resultArray
}
export async function fetchCurrentPeriod(SupabaseClient, clientId){
    const { data, error } = await SupabaseClient
    .from('College_Period')
    .select("id, period_description, start_date, end_date, owner, is_active, Period_Courses(id, Course_Name, Course_Professor)")
    .eq('owner', clientId)
    .eq('is_active', true)
    if(error) throw new Error(`An error ocurred while fetching the current period data, ${error}.`)
    return data
}
export async function deactivatePeriodStatus(SupabaseClient, periodId){
    const { error } = await SupabaseClient
    .from('College_Period')
    .update({ is_active:false })
    .eq('id', periodId)
    if(error) throw new Error(`An error ocurred while creating the college period, ${error}. Please try again`)
}