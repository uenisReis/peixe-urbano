

interface imgUrl{
url:string
}

export class Carrinho{

constructor(
public id: number,
public titulo: string,
public image:imgUrl,
 public descricao:string,
public valor: number,
public quantidade:number
)
{}





}