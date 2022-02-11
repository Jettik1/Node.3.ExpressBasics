const { v4: uuidv4 } = require('uuid');
const path = require('path')

module.exports = class FileService {
    saveFile(file) {
        try {
            const fileName = uuidv4() + '.jpg';
            const filePath = path.resolve('static',fileName)
            file.mv(filePath);
            return fileName;
        } catch (e) {
            console.log(e)
        }
    }
}