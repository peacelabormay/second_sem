import multer, { diskStorage } from 'multer';
import { extname as _extname } from 'path'; 

const storage = diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, './uploads');//файлы будут храниться в каталоге uploads 
    },
    filename: (req, file, cb) => {//указывает как назвать файлы
        cb(null, file.originalname);//имя файла будет таким же как на пк пользователя
    }
});

function checkFileType(file, cb) {
    const filetypes = /jpeg|JPEG|jpg|JPG|png|PNG/;
    const extname = filetypes.test(_extname(file.originalname).toLowerCase());//метод test выполняет поиск сопоставления регулярного выражения указанной строке 
    //extname возвращает расширение файла 
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) { 
        return cb(null, true);//принимает файл, если будет false - отклоняем файл
    } else {
        cb('Error: Images Only!');
    }
}

const upload = multer({ 
    storage: storage,//указываем где сохранять файлы 
    fileFilter: (_req, file, cb) => { //fileFilter это функция для контроля принятия файлов
        checkFileType(file, cb); 
    }
}).any('image');//принимает все переданные файйлы, массив файлов будет сохранен в req.files

export default upload;