export async function createPeriod(SupabaseClient, PeriodData){
    try{
        const { data, error } = await SupabaseClient
        .from('College_Period')
        .insert(PeriodData)
        .select()
        if(error) throw new Error(`An error ocurred while creating the college period, ${error}. Please try again`)
        return data
    } catch(error){
        alert(error)
    }

}