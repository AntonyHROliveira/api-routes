
// 1°) Forma de fazer uma requizição basica:
// export function GET(request: Request){
//     return Response.json({ hello: "World"});
// }
// NOTA: Para exibir no pronpt de comando (cmd);


// 2°) Forma de fazer uma requizição basica:
// export function GET(request: Request){
//     console.log("GET request received")
//     return Response.json({ hello: "World"});
// }
// NOTA: Para exibir no console do (vscode);




export function GET(request: Request){

// Criando um Vetor com Objeto
const data = [
    {
      id:1,
      text: "Just launcher my new app!!",
      isLiked: false,
    },
    {
      id:2,
      text: "Working on some new UI designs today.",
      isLiked: true,
    },
    {
      id:3,
      text: "Morning run complete!!",
      isLiked: true,
    },
  ];
  return Response.json(data);
  
}








/*NOTA:
Para este arquivo funcionar precisa esta no arquivo (app.json) este comando:
=> "web": {
      "bundler": "metro",
      "output": "server",
      "favicon": "./assets/images/favicon.png"
    },
    
*/
