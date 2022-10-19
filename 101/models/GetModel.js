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

module.exports = { selectModels };