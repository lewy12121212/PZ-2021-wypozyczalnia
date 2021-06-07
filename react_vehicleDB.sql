-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 07 Cze 2021, 16:29
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `react_vehicleDB`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `testTable`
--

CREATE TABLE `testTable` (
  `id` int(11) NOT NULL,
  `Name` varchar(50) COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `Model` varchar(50) COLLATE utf8mb4_polish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `testTable`
--

INSERT INTO `testTable` (`id`, `Name`, `Model`) VALUES
(48, 'Test', 'Test'),
(49, 'Testowe autko', 'TEstowe Autko'),
(50, 'Citroen', 'Marka');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `vdb_customer`
--

CREATE TABLE `vdb_customer` (
  `Id` int(11) NOT NULL,
  `Name` varchar(40) COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `Surname` varchar(50) COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `Phone_number` varchar(15) COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `Mail` varchar(50) COLLATE utf8mb4_polish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `vdb_customer`
--

INSERT INTO `vdb_customer` (`Id`, `Name`, `Surname`, `Phone_number`, `Mail`) VALUES
(1, 'Adam', 'Wioślarz', '123456123', 'adam@wioslarz.pl'),
(2, 'Robert', 'Mały', '567234789', 'robert@maly.pl'),
(5, 'Mirosław', 'Czarny', '987364098', 'miroslaw@czarny.pl'),
(6, 'Wojciech', 'Zachała', '876345123', 'wojciech@zachala.pl');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `vdb_repairs`
--

CREATE TABLE `vdb_repairs` (
  `Id` int(11) NOT NULL,
  `Reparer_id` int(11) DEFAULT NULL,
  `Vehicle_id` int(11) DEFAULT NULL,
  `Replaced_parts` text COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `Activities_performed` text COLLATE utf8mb4_polish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `vdb_repairs`
--

INSERT INTO `vdb_repairs` (`Id`, `Reparer_id`, `Vehicle_id`, `Replaced_parts`, `Activities_performed`) VALUES
(14, 2, 18, 'Olej, opony, filtry', 'Dokonano wymiany opon, wymiany oleju oraz filtrów'),
(15, 2, 23, 'Fotel pasażera, poduszka powietrzna', 'Dokonano wymiany fotelu pasażera oraz poduszki powietrznej pasażera.'),
(16, 2, 27, 'Skrzynia biegów', 'Dokonano wymiany skrzyni biegów'),
(17, 2, 15, 'Żarówki', 'Wymiana żarówek'),
(18, 2, 18, 'szyba przednia', 'wymianiłem szybę :)');

--
-- Wyzwalacze `vdb_repairs`
--
DELIMITER $$
CREATE TRIGGER `change_state_of_vehicle` AFTER INSERT ON `vdb_repairs` FOR EACH ROW BEGIN
UPDATE vdb_vehicles SET vdb_vehicles.State = 'dostępny' WHERE vdb_vehicles.Id LIKE NEW.Vehicle_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `vdb_users`
--

CREATE TABLE `vdb_users` (
  `Id` int(11) NOT NULL,
  `Name` varchar(40) COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `Surname` varchar(50) COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `Login` varchar(30) COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `Password` varchar(30) COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `Type` enum('administrator','serwisant','pracownik') COLLATE utf8mb4_polish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `vdb_users`
--

INSERT INTO `vdb_users` (`Id`, `Name`, `Surname`, `Login`, `Password`, `Type`) VALUES
(2, 'Serwisant', 'Serwisant', 'Serwisant', 'zaq1@WSX', 'serwisant'),
(3, 'Pracownik', 'Pracownik', 'Pracownik', 'zaq1@WSX', 'pracownik'),
(29, 'c', 'c', 'c', 'c', 'serwisant'),
(30, 'b', 'b', 'b', 'b', 'pracownik'),
(31, 'a', 'a', 'a', 'a', 'administrator');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `vdb_vehicles`
--

CREATE TABLE `vdb_vehicles` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `Model` varchar(50) COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `Type` enum('Sedan','SUV','Hatchback','VAN','Coupe','Camper','Cabriolet') COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `Engine_capacity` float DEFAULT NULL,
  `State` enum('dostępny','w naprawie','oczekujący','wypożyczony') COLLATE utf8mb4_polish_ci DEFAULT NULL,
  `Img` text COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `vdb_vehicles`
--

INSERT INTO `vdb_vehicles` (`Id`, `Name`, `Model`, `Type`, `Engine_capacity`, `State`, `Img`) VALUES
(15, 'Audi', 'Audi', 'Cabriolet', 2.2, 'dostępny', 'https://res.cloudinary.com/dvz618eta/image/upload/v1621949053/pz_img_2021/taopvyrooxfu00pezoax.jpg'),
(16, 'Fiat', 'Ducato', 'Camper', 2.5, 'dostępny', 'https://res.cloudinary.com/dvz618eta/image/upload/v1621949126/pz_img_2021/hlzvsqgddoavw7pwldvf.jpg'),
(18, 'Fiat', 'Fiat', 'Camper', 2.8, 'dostępny', 'https://res.cloudinary.com/dvz618eta/image/upload/v1621949187/pz_img_2021/cuawfqbgxnrdvzjptadg.jpg'),
(20, 'Toyota', 'Corolla', 'Hatchback', 1.8, 'wypożyczony', 'https://res.cloudinary.com/dvz618eta/image/upload/v1621949281/pz_img_2021/ovdkxx14ljvjxzg2zfi8.jpg'),
(23, 'Jeep', 'Jeep', 'SUV', 2, 'dostępny', 'https://res.cloudinary.com/dvz618eta/image/upload/v1621949362/pz_img_2021/l7lyxx1oi3mdyea0tdeq.jpg'),
(24, 'Mercedes', 'Mercedes', 'SUV', 2.1, 'oczekujący', 'https://res.cloudinary.com/dvz618eta/image/upload/v1621949394/pz_img_2021/qewbwsh6qdf4zplynsbd.jpg'),
(26, 'Toyota', 'Corolla', 'Hatchback', 1.5, 'w naprawie', 'https://res.cloudinary.com/dvz618eta/image/upload/v1621949310/pz_img_2021/rodnm7yzdng8v1lyudib.jpg'),
(27, 'VW', 'T3', 'VAN', 1.3, 'dostępny', 'https://res.cloudinary.com/dvz618eta/image/upload/v1621949430/pz_img_2021/uktwdlcejufooazq1ixu.jpg');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `vdb_vehicle_rentals`
--

CREATE TABLE `vdb_vehicle_rentals` (
  `Id` int(11) NOT NULL,
  `Customer_id` int(11) DEFAULT NULL,
  `Vehicle_id` int(11) DEFAULT NULL,
  `Rent_data` date DEFAULT NULL,
  `Return_data` date DEFAULT NULL,
  `State` enum('aktywne','zamknięte') COLLATE utf8mb4_polish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `vdb_vehicle_rentals`
--

INSERT INTO `vdb_vehicle_rentals` (`Id`, `Customer_id`, `Vehicle_id`, `Rent_data`, `Return_data`, `State`) VALUES
(20, 5, 15, '2021-05-26', '2021-06-06', 'zamknięte'),
(21, 1, 15, '2021-05-28', '2021-06-02', 'zamknięte'),
(22, 2, 15, '2021-07-12', '2021-07-31', 'zamknięte'),
(23, 2, 15, '2021-07-12', '2021-07-31', 'aktywne'),
(24, 5, 20, '2021-06-10', '2021-06-26', 'aktywne'),
(25, 5, 20, '2021-06-10', '2021-06-26', 'aktywne'),
(26, 1, 18, '2021-06-11', '2021-06-19', 'zamknięte');

--
-- Wyzwalacze `vdb_vehicle_rentals`
--
DELIMITER $$
CREATE TRIGGER `change_state_of_vehicle_rentals` AFTER INSERT ON `vdb_vehicle_rentals` FOR EACH ROW BEGIN
UPDATE vdb_vehicles SET vdb_vehicles.State = 'wypożyczony' WHERE vdb_vehicles.Id LIKE NEW.Vehicle_id;
END
$$
DELIMITER ;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `testTable`
--
ALTER TABLE `testTable`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `vdb_customer`
--
ALTER TABLE `vdb_customer`
  ADD PRIMARY KEY (`Id`);

--
-- Indeksy dla tabeli `vdb_repairs`
--
ALTER TABLE `vdb_repairs`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Reparer_id` (`Reparer_id`),
  ADD KEY `Vehicle_id` (`Vehicle_id`);

--
-- Indeksy dla tabeli `vdb_users`
--
ALTER TABLE `vdb_users`
  ADD PRIMARY KEY (`Id`);

--
-- Indeksy dla tabeli `vdb_vehicles`
--
ALTER TABLE `vdb_vehicles`
  ADD PRIMARY KEY (`Id`);

--
-- Indeksy dla tabeli `vdb_vehicle_rentals`
--
ALTER TABLE `vdb_vehicle_rentals`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Customer_id` (`Customer_id`),
  ADD KEY `Vehicle_id` (`Vehicle_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `testTable`
--
ALTER TABLE `testTable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT dla tabeli `vdb_customer`
--
ALTER TABLE `vdb_customer`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT dla tabeli `vdb_repairs`
--
ALTER TABLE `vdb_repairs`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT dla tabeli `vdb_users`
--
ALTER TABLE `vdb_users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT dla tabeli `vdb_vehicles`
--
ALTER TABLE `vdb_vehicles`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT dla tabeli `vdb_vehicle_rentals`
--
ALTER TABLE `vdb_vehicle_rentals`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `vdb_repairs`
--
ALTER TABLE `vdb_repairs`
  ADD CONSTRAINT `vdb_repairs_ibfk_1` FOREIGN KEY (`Reparer_id`) REFERENCES `vdb_users` (`Id`),
  ADD CONSTRAINT `vdb_repairs_ibfk_2` FOREIGN KEY (`Vehicle_id`) REFERENCES `vdb_vehicles` (`Id`);

--
-- Ograniczenia dla tabeli `vdb_vehicle_rentals`
--
ALTER TABLE `vdb_vehicle_rentals`
  ADD CONSTRAINT `vdb_vehicle_rentals_ibfk_1` FOREIGN KEY (`Customer_id`) REFERENCES `vdb_customer` (`Id`),
  ADD CONSTRAINT `vdb_vehicle_rentals_ibfk_2` FOREIGN KEY (`Vehicle_id`) REFERENCES `vdb_vehicles` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
