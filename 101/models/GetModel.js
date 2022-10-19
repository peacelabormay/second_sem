const { supabase } = require('../configs/connection.js');

async function selectModels() {
    try {
        let {data, error} = await supabase
            .from('Models')
            .select('*');
       // console.log(data);    
        if (error) return error;
        return data;
    } catch (e) {
        return false;
    }
}

async function selectModel(ID) {
    try {
        let {data, error} = await supabase
            .from('Models')
            .select('*')
            .eq('id', ID);
//        console.log(data);    
        if (error) throw error
        return await data;
    } catch (e) {
        throw e
    }
}

module.exports = { 
    selectModels,
    selectModel,
 };