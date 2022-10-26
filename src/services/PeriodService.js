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