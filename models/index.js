import Department from "./Department.js";
import User from "./User.js";
import Role from "./roles.js";
import Rendezvous from "./rendezvous.js";
import Service from "./service.js";
import Hospital from "./hospitals.js";
import Prestation from "./prestations.js";
import Facturation from "./facturation.js";

//Les relations
User.belongsToMany(Role,{through:'UserRole'})
Role.belongsToMany(User,{through:'UserRole'})

User.hasMany(Prestation,{foreignKey : 'id_user'});
Prestation.belongsTo(User,{foreignKey: 'id_prestation'});

User.hasMany(Service,{foreignKey : 'id_user'});
Service.hasMany(User,{foreignKey : 'id_srvice'});

User.hasMany(Hospital,{foreignKey : 'id_user'});
Hospital.belongsTo(User,{foreignKey : 'id_hospiital'});

Hospital.hasMany(Service,{foreignKey : 'id_hospiital'});
Service.hasMany(Hospital,{foreignKey : 'id_service'});

Facturation.hasMany(Prestation,{foreignKey : 'id_facturation'});
Prestation.hasMany(Facturation,{foreignKey : 'id_prestation'});

User.hasMany(Rendezvous,{foreignKey : 'id_user'});
Rendezvous.hasMany(User,{foreignKey : 'id_rdv'});


 
 


export {Department, User, Role, Rendezvous, Service ,Hospital,Prestation, Facturation}