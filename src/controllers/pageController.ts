import { Request, Response } from "express";
import {createMenuobject} from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuobject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
}
export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuobject('dog'),
        banner: {
            title: 'Chachorros',
            background: 'banner_dog.jpg'
        }
    });
}
export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuobject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });
}
export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuobject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    });
}