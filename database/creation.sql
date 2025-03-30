drop database if exists bswes4jungwirthtestdb;
create database bswes4jungwirthtestdb;

drop table if exists person cascade;
create table person
(
    persID   uuid        not null,
    vorname  varchar(30) not null,
    nachname varchar(50) not null,
    primary key (persID)
);


drop table if exists location cascade;
create table location
(
    locationID uuid not null,
    plz        numeric,
    city       varchar(20),
    street     varchar(50),

    primary key (locationID)
);

drop table if exists umzug CASCADE;
create table umzug
(
    umzugID       uuid    not null,
    personID      uuid    not null,
    locationIDvon uuid    not null,
    locationIDzu  uuid    not null,
    amount        varchar(100),
    packaging     bool not null,

    primary key (umzugID),

    FOREIGN KEY (locationIDvon) references location (locationID),
    FOREIGN KEY (locationIDzu) references location (locationID),
    foreign key (personID) references person(persID)
);
