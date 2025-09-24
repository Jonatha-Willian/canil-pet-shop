import { Request, Response } from "express";
import {createMenuobject} from '../helpers/createMenuObject';
import { Pet } from "../models/pet";

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();
    
    res.render('pages/page', {
        menu: createMenuobject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');
    res.render('pages/page', {
        menu: createMenuobject('dog'),
        banner: {
            title: 'Chachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}
export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');
    res.render('pages/page', {
        menu: createMenuobject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}
export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
    res.render('pages/page', {
        menu: createMenuobject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}