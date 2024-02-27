import Manga from "../models/manga.model.js";

const mangaDao={}

mangaDao.getAll = async (req, res) => {
    const manga = await Manga.find()
    return manga;
}

mangaDao.getOne =  async (barcode) => {
    const manga = await Manga.findOne({barcode:barcode});
    return manga;
}

mangaDao.insertOne = async(manga)=>{
    const mangaSaved = new Manga(manga);
    await mangaSaved.save(); 
    return true;  
}

mangaDao.updateOne = async(barcode, manga)=>{
const updateOne = await Manga.findOneAndUpdate({barcode:barcode},manga);
if(updateOne != null){ 
    return true;

}
else{
    return false
} 
}


mangaDao.deleteOne = async(barcode)=>{
const deleteOne = await Manga.findOneAndDelete({barcode:barcode});
if(deleteOne != null){ 
    return true;

}
else{
    return false
} 
}

export default mangaDao;