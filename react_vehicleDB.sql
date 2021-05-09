-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 25 Kwi 2021, 21:03
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
(1, 2, 3, 'uszczelka pod głowicą, olej, filtr kabinowy', 'dokonano wymiany filtru kabinowego oraz oleju, wymieniono uszczelkę pod głowicą'),
(2, 2, 3, 'filtr oleju, filtr powietrza, filtr paliwa', 'dokonano wymiany filtrów'),
(3, 2, 2, 'Przednia szyba, lewe lustro', 'dokonano wymiany przedniej szyby oraz lewego lusterka.');

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
(1, 'Admin', 'Admin', 'Admin', 'zaq1@WSX', 'administrator'),
(2, 'Serwisant', 'Serwisant', 'Serwisant', 'Serwisantzaq1', 'serwisant');

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
  `State` enum('dostępny','w naprawie','oczekujący','wypożyczony') COLLATE utf8mb4_polish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `vdb_vehicles`
--

INSERT INTO `vdb_vehicles` (`Id`, `Name`, `Model`, `Type`, `Engine_capacity`, `State`) VALUES
(1, 'VW', 'Transporter', 'VAN', 1.8, 'wypożyczony'),
(2, 'Scania', 'camper', 'Camper', 2, 'dostępny'),
(3, 'VW', 'Transporter', 'VAN', 1.8, 'dostępny'),
(4, 'MAN', 'camper', 'Camper', 2, 'oczekujący'),
(5, 'MAN', 'xyz', 'Sedan', 2.2, 'wypożyczony'),
(6, 'Volvo', 'vfr', 'Sedan', 1.6, 'wypożyczony'),
(7, 'MAN', 'xyz', 'Sedan', 2.2, 'w naprawie'),
(8, 'Volvo', 'vfr', 'Sedan', 1.6, 'oczekujący');

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
(1, 1, 1, '2021-04-25', '2021-05-30', 'aktywne'),
(2, 5, 6, '2021-04-23', '2021-06-16', 'aktywne'),
(4, 2, 5, '2021-04-18', '2021-06-15', 'aktywne'),
(5, 2, 5, '2021-04-18', '2021-06-15', 'aktywne');

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT dla tabeli `vdb_repairs`
--
ALTER TABLE `vdb_repairs`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `vdb_users`
--
ALTER TABLE `vdb_users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `vdb_vehicles`
--
ALTER TABLE `vdb_vehicles`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT dla tabeli `vdb_vehicle_rentals`
--
ALTER TABLE `vdb_vehicle_rentals`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
