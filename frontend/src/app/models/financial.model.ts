

export interface modelProfile{
    id: number;
    company: string;
    avatar: string;
    city: string;
    cep: number;
    cnpj: number;
    whatsapp: number;
 

}






export interface modelFinancial{
    id?: string;
    quantity: string;
    date: string;
    box: number;
    menu_item: string;
 

}


export interface modelBox{
    id?: string;
    name: string;
    value_start?: number;
    total_balance?: number;
    date: string;
    user: number;
    date_close?: string;
    first_name?: string;


}

export interface modelMenu{
    id?: number;
    name: string;
    category: string;
    price: number;
    status: boolean;
    category_name?: string;
    cost?: number
    profitMargin?: number

}


export interface modelCategory {
    id?: number;
    name: string;
}

export interface modelMenuItem {
    id?: number;
    name: string;
    category: string;
    price: number;
  

}



export interface modelTransations {
    id?: number;
    type: string;
    amount: string;
    description: string;
    date: string;
    box_name: string;
    status?:string;
    table: string;
    delivey: boolean;
    type_order: string;
  }

  export interface modelOrders{
    id?: number;
    type: string;
    amount: number;
    menu_item: number;
    date: string;
    box: number;
    quantity: number;
    status: string;
    type_order: string;
    minutesPassed?: number;
    secondsPassed?: number;
    timerId: any;
    formattedTime?: any;
    open_timestamp: string;
    closed_timestamp: string;
    preparation_timestamp: string;
    ready_timestamp: string;
    menu_item_name: string;
    items: any;
    total: string;


  }
  

  export interface modelLogin {
    token?: string
    username: string;
    password: string;
    access?: string;

  }
  
  