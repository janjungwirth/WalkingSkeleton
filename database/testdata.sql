-- Diese Funktion wird benötigt, um UUIDs zu generieren.
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Daten für die Tabelle 'person'
INSERT INTO person (persID, vorname, nachname)
VALUES
    (uuid_generate_v4(), 'Max', 'Mustermann'),
    (uuid_generate_v4(), 'Lisa', 'Müller'),
    (uuid_generate_v4(), 'Tom', 'Schneider'),
    (uuid_generate_v4(), 'Anna', 'Schmidt');

-- 2. Daten für die Tabelle 'location'
INSERT INTO location (locationID, plz, city, street)
VALUES
    (uuid_generate_v4(), 10115, 'Berlin', 'Alexanderplatz 1'),
    (uuid_generate_v4(), 80331, 'München', 'Marienplatz 8'),
    (uuid_generate_v4(), 50667, 'Köln', 'Domkloster 4'),
    (uuid_generate_v4(), 20095, 'Hamburg', 'Speersort 10');

-- 3. Testdaten für 'umzug'
INSERT INTO umzug (umzugID, personid,locationIDvon, locationIDzu, amount, packaging)
VALUES
    (uuid_generate_v4(),'4dc6d0bd-46fa-4bef-b0be-c18092427269', 'b5436748-8c4b-46c4-b66d-b65e4fc1dc26', '2c0438a0-5dd4-4fe4-a0f7-01d7b593da3e', '43 Kisten', true),
    (uuid_generate_v4(),'8fec59db-3d73-4572-a95e-fe301ec7573e', '5060ca59-d4b2-4acd-8a1c-a5daf560df69', '1680ff5b-2630-4e71-8846-4408babceaaa', '45 Kisten', false),
    (uuid_generate_v4(),'890ed087-6d9d-4fc7-af1b-58b7a9d4d1e0', '2c0438a0-5dd4-4fe4-a0f7-01d7b593da3e', 'b5436748-8c4b-46c4-b66d-b65e4fc1dc26', '25 Kisten', true),
    (uuid_generate_v4(),'3952704a-b831-4993-a9e9-5e4a7a7af171', '1680ff5b-2630-4e71-8846-4408babceaaa', '5060ca59-d4b2-4acd-8a1c-a5daf560df69', '12 Kisten', false);






