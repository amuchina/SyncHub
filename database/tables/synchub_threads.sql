CREATE DATABASE  IF NOT EXISTS `synchub` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `synchub`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: synchub
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `threads`
--

DROP TABLE IF EXISTS `threads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `threads` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `belongsToHub` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tags`)),
  `description` varchar(255) NOT NULL,
  `likes` int(11) NOT NULL,
  `dislikes` int(11) NOT NULL,
  `shareCount` int(11) NOT NULL,
  `publishDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94666 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `threads`
--

LOCK TABLES `threads` WRITE;
/*!40000 ALTER TABLE `threads` DISABLE KEYS */;
INSERT INTO `threads` VALUES (17580,7,'hub1','titolo4','{\"0\":\"Viaggi\",\"2\":\"Economia\"}','descrizione3',77,6,8,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(18191,3,'hub2','titolo3','[\"Scienza\"]','descrizione3',53,57,81,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(19276,9,'hub2','titolo4','[\"Economia\"]','descrizione1',84,37,24,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(21731,4,'hub3','titolo1','[\"Scienza\"]','descrizione4',4,100,55,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(28255,4,'hub3','titolo3','[\"Economia\"]','descrizione4',18,17,68,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(31147,4,'hub1','titolo1','[\"Scienza\"]','descrizione2',99,27,6,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(37119,10,'hub3','titolo3','[\"Economia\",\"Attualita\"]','descrizione4',34,88,59,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(38827,6,'hub3','titolo4','[\"Scienza\"]','descrizione2',14,98,40,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(39670,8,'hub2','titolo2','[\"Scienza\"]','descrizione4',30,88,50,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(41131,8,'hub3','titolo4','[\"Scienza\",\"Economia\"]','descrizione3',51,62,91,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(43041,9,'hub1','titolo4','[\"Cucina\",\"Scienza\"]','descrizione1',25,38,5,'2024-01-27 18:06:03','2024-01-27 18:06:03','2024-01-27 18:06:03'),(52420,5,'hub3','titolo3','[\"Scienza\"]','descrizione1',62,95,80,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(54845,3,'hub1','titolo1','[\"Viaggi\",\"Cucina\"]','descrizione2',60,18,11,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(58822,5,'hub3','titolo2','[\"Attualita\"]','descrizione1',44,69,64,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(61217,2,'hub2','titolo2','[\"Cucina\",\"Economia\"]','descrizione2',73,69,57,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(77939,6,'hub1','titolo4','[\"Attualita\"]','descrizione2',77,7,51,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(81645,4,'hub3','titolo3','[\"Cucina\",\"Scienza\"]','descrizione3',81,98,80,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(87111,8,'hub3','titolo4','[\"Economia\"]','descrizione1',6,32,31,'2024-01-27 18:06:03','2024-01-27 18:06:04','2024-01-27 18:06:04'),(91956,7,'hub3','titolo2','[\"Scienza\"]','descrizione1',74,43,92,'2024-01-27 18:06:03','2024-01-27 18:06:03','2024-01-27 18:06:03'),(94665,3,'hub1','titolo4','[\"Scienza\",\"Viaggi\"]','descrizione1',99,69,1,'2024-01-27 18:06:03','2024-01-27 18:06:03','2024-01-27 18:06:03');
/*!40000 ALTER TABLE `threads` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-14 16:38:35
