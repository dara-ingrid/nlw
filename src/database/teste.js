const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-3.6863998",
        lng: "-40.3575938",
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "8898989898",
        images: [
  
          "https://images.unsplash.com/photo-1598539961915-040bb3be3f69?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  
          "https://images.unsplash.com/photo-1567701554261-fcc4bda64847?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
  
        ].toString(),
  
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visita Das 18h até as 8h",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
   console.log(orphanage)

    //deletar dado da tabela
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
})