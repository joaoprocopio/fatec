import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { Color } from "../entities/Color";

class ColorController {
    async create(req:Request,res:Response){
        const {red,green,blue} = req.params;
        if( red && green && blue ){
            const r = parseInt(red), g = parseInt(green), b = parseInt(blue);
            if( r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255 ){
                const color = await AppDataSource.manager.save(Color, {red:r,green:g,blue:b});
                return res.json(color);
            }
            else{
                res.json({message:"RGB precisa estar no intervalo de 0 a 255"})
            }
        }
        else{
            res.json({message:"RGB necessário"})
        }
    }

    async remove(req:Request,res:Response){
        const {id} = req.params;
        const {affected:count} = await AppDataSource.manager.delete(Color,{id});
        return res.json({count});
    }

    async list(_: Request, res: Response): Promise<Response> {
        const response = await AppDataSource.manager.find(Color,{
            order: {
                id: "desc"
            }
        });
        return res.json(response);
    }
}

export default new ColorController();