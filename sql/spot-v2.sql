-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : dim. 05 mars 2023 à 19:02
-- Version du serveur : 8.0.32-0ubuntu0.22.04.2
-- Version de PHP : 8.1.2-1ubuntu2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `spot`
--

-- --------------------------------------------------------

--
-- Structure de la table `endroit`
--

CREATE TABLE `endroit` (
  `id` int NOT NULL,
  `titre` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `ville` varchar(255) NOT NULL DEFAULT 'Inconnue',
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `endroit`
--

INSERT INTO `endroit` (`id`, `titre`, `description`, `ville`, `image`) VALUES
(1, 'Cégep de Matane', 'Le meilleur cégep <3', 'Inconnue', 'https://spot.mayalennox.com/Image/Cégep_de_Matane_drone.jpg'),
(48, 'test', 'test', 'Inconnue', 'https://spot.mayalennox.com/Image/paysage-vert-mini.png'),
(55, 'sg', 'sgddg', 'Inconnue', 'https://spot.mayalennox.com/Image/borne-electrique.jpg'),
(56, 'dvvds', 'fdsfsdf', 'Inconnue', 'https://spot.mayalennox.com/Image/IMG_20230225_204728.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `membre`
--

CREATE TABLE `membre` (
  `id` int NOT NULL,
  `nom` varchar(50) NOT NULL,
  `courriel` varchar(50) NOT NULL,
  `mdp` text NOT NULL,
  `pseudo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `membre`
--

INSERT INTO `membre` (`id`, `nom`, `courriel`, `mdp`, `pseudo`) VALUES
(1, 'Maya Lennox', 'm.lennox1590@gmail.com', 'test1234', 'mayo1590'),
(2, 'test', 'test@test.com', '$2y$10$3NSz0nq4KETrkC43j0rZ3O2RWWfTyJicX065wRdomvM12Jz32bTxe', 'test'),
(3, 'test1234', 'test1234@gmail.com', '$2y$10$9s76/90rKp8cVgnHKyas6eN11xn5GH.9/H75pjpgWKWe1pTLkNRw6', 'test1234');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `endroit`
--
ALTER TABLE `endroit`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `membre`
--
ALTER TABLE `membre`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `endroit`
--
ALTER TABLE `endroit`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT pour la table `membre`
--
ALTER TABLE `membre`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
