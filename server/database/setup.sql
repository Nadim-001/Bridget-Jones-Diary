DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    entries_id INT GENERATED ALWAYS AS IDENTITY,
    entries_date INT /*UNIQUE NOT NULL*/,
    entries_name VARCHAR(50) /*UNIQUE NOT NULL*/,
    entries_description VARCHAR(1000),
    PRIMARY KEY (entries_id)
);

INSERT INTO entries
    (entries_date, entries_name, entries_description)
VALUES
    (20231001, 'Day 1', 'Whatever happened on the 1st of October 2023'),
    (20231002, 'Day 2', 'Whatever happened on the 2nd of October 2023'),
    (20231003, 'Day 3', 'Whatever happened on the 3rd of October 2023'),
    (20231004, 'Day 4', 'Whatever happened on the 4th of October 2023'),
    (20231005, 'Day 5', 'Whatever happened on the 5th of October 2023'),
    (20231006, 'Day 6', 'Whatever happened on the 6th of October 2023');