create database l18100188;

use l18100188;

create table registro
(
  NumControl int not null,
  NombreEs varchar (30),
  ApellidoPa varchar (30),
  ApellidoMa varchar (30),
  FechaNa varchar (30),
  DireccionEs varchar(60),
  Email varchar(60),
  Tel varchar(30),
  constraint PE_NumControl Primary key(NumControl)
 );

 Insert into registro (NumControl, NombreEs, ApellidoPa, ApellidoMa, FechaNa, DireccionEs, Email, Tel) 
 Values ('18100188', 'Luis Angel', 'Hernandez', 'Lopez', '26-06-2000', 'Andres Treviño #90', 'l18100188@nlaredo.tecnm.mx', '8671269382');