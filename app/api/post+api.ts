
// Fazendo uma requizição:
export function GET(request: Request){
    return Response.json({ hello: "World"});
}











/*NOTA:
Para este arquivo funcionar precisa esta no arquivo (app.json) este comando:
=> "web": {
      "bundler": "metro",
      "output": "server",
      "favicon": "./assets/images/favicon.png"
    },
    
*/
