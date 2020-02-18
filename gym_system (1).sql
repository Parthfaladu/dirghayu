-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 18, 2020 at 09:38 PM
-- Server version: 5.7.28-0ubuntu0.16.04.2
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gym_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `incharge_name` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`id`, `name`, `address`, `incharge_name`, `mobile`, `email`, `created_at`, `updated_at`, `city`, `state`, `zipcode`) VALUES
(1, 'admin', 'abc near jcb', 'admin', '123456789', 'admin@example.com', '2019-12-25 17:17:00', '2019-12-25 17:17:00', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zipcode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `height` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `weight` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chest` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `waist` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thigh` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `arms` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `interested_area` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `city`, `state`, `zipcode`, `height`, `weight`, `chest`, `waist`, `thigh`, `arms`, `fat`, `interested_area`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'Bangalore', 'Karnataka', '586423', '5', '65', '30', '30', '30', '25', '34', 'loos weight', '2019-12-27 10:36:56', '2019-12-27 10:36:56', 3),
(3, 'kolkata', 'west bengal', '700002', '5.5', '78', '88', '77', '66', '55', '44', 'body building', '2019-12-27 11:43:09', '2019-12-27 11:43:09', 2),
(6, 'abcpur', 'gujarat', '362001', '12\'1', '50kg', '12', '32', '11', '20', '23', 'weight gain', '2020-01-01 12:01:35', '2020-01-01 12:01:35', 9),
(9, 'Abington1', 'MAA', '23512', '150', '50', '135', '140', '130', '180', '40', 'jsdh wjehrjk', '2020-02-18 06:48:50', '2020-02-18 06:48:50', 15);

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `last_follow_up_date` date DEFAULT NULL,
  `next_follow_up_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`id`, `name`, `email`, `phone`, `gender`, `remark`, `last_follow_up_date`, `next_follow_up_date`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'Mr abc xyza', 'test1@example.com', '123457986', 'male', 'asddfdf', '2021-02-12', '2021-02-12', '2020-02-13 07:10:58', '2020-02-13 07:13:14', 1),
(2, 'lura', 'lura@gmail.com', '12345233', 'female', 'sdfs erwe', '2020-03-12', '2020-05-23', '2020-02-14 00:03:26', '2020-02-14 00:03:26', 1);

-- --------------------------------------------------------

--
-- Table structure for table `enquiry_follow_up`
--

CREATE TABLE `enquiry_follow_up` (
  `id` int(11) NOT NULL,
  `enquiry_id` int(11) NOT NULL,
  `next_date` date NOT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `expense`
--

CREATE TABLE `expense` (
  `id` int(11) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `purchase_date` date NOT NULL,
  `bill_no` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `bill_photo` text,
  `user_id` int(11) NOT NULL,
  `branch_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` int(11) NOT NULL,
  `bill_to` int(11) NOT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `customer_address` varchar(255) DEFAULT NULL,
  `customer_phone` varchar(255) DEFAULT NULL,
  `invoice_date` date NOT NULL,
  `subtotal` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `tax` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `invoice_item`
--

CREATE TABLE `invoice_item` (
  `id` int(11) NOT NULL,
  `invoice_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_12_21_050402_create_permission_tables', 1),
(4, '2016_06_01_000001_create_oauth_auth_codes_table', 2),
(5, '2016_06_01_000002_create_oauth_access_tokens_table', 2),
(6, '2016_06_01_000003_create_oauth_refresh_tokens_table', 2),
(7, '2016_06_01_000004_create_oauth_clients_table', 2),
(8, '2016_06_01_000005_create_oauth_personal_access_clients_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(2, 'App\\User', 6),
(3, 'App\\User', 11),
(3, 'App\\User', 12);

-- --------------------------------------------------------

--
-- Table structure for table `notice`
--

CREATE TABLE `notice` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `to_id` int(11) NOT NULL,
  `from_id` int(11) NOT NULL,
  `detail` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('0322142d74bc6d52cf34d13ac1b78f4f380f862c2f0674709fef73bc85dcf0d2f6625ca0e2964351', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:29:38', '2019-12-26 09:29:38', '2020-12-26 14:59:38'),
('111a2a53d9726c99d6cd808c80a3b1782aef7e4f0b2a4edbffc2f2f5257c8d7bbcfdd4c712db346f', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:17:22', '2019-12-30 11:17:22', '2020-12-30 16:47:22'),
('1877eb13e9ccbe9ffa00e8ef0bb8f438fa2b6d43c4ee146a6d99cebc7e0ca3e9d423c0d202f7e81a', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:28:55', '2019-12-26 09:28:55', '2020-12-26 14:58:55'),
('1fd70152537f66d673906813b2523fcc735bf8b2968ea19d13ca3e7d8f93e9046f0c93f5df039322', 1, 1, NULL, '["*"]', 0, '2020-02-12 06:46:40', '2020-02-12 06:46:40', '2021-02-12 12:16:40'),
('2492542368a96c28dd6d133cf2656505f84d63ff2e52599bf16a189dd039ca40cb3179dd44d7624c', 1, 1, NULL, '["*"]', 0, '2019-12-25 11:47:41', '2019-12-25 11:47:41', '2020-12-25 17:17:41'),
('34c0fdbda1551c077f638fdd38b93af5d60419f65c4c0f79fe27c4b30aeeec5f999d2248a0cfe34d', 1, 1, NULL, '["*"]', 0, '2020-02-12 06:46:49', '2020-02-12 06:46:49', '2021-02-12 12:16:49'),
('3a2c9d2cf175d73d1eba72c17584a07e4ea9bdc0419fcbb4478afa083296123a497989370a57bd4b', 6, 1, NULL, '["*"]', 0, '2020-01-03 06:46:27', '2020-01-03 06:46:27', '2021-01-03 12:16:27'),
('407675d1fc965b6cfa0c699fb2c9a6a96cc763dc272c67544e00cdb41b3936b706ea047d8aeb2a11', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:17:53', '2019-12-30 11:17:53', '2020-12-30 16:47:53'),
('4307fccbc3a7af1f180e4daa4c535bb3dba6a2ec17a60a14e5a7e31aa6ced376c377677f71d5a216', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:28:34', '2019-12-26 09:28:34', '2020-12-26 14:58:34'),
('49da668ccd6f1a4c551a63c792c7362ab32b8a87e06ea5387ca79c10481c083b6279a681a4e78544', 1, 1, NULL, '["*"]', 0, '2019-12-30 10:50:53', '2019-12-30 10:50:53', '2020-12-30 16:20:53'),
('7c2a239747f24e2e501d9ce24edb41e570510ea2fc5fee7e911fe8e806606f134b50a2f9f9f95f44', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:26:19', '2019-12-26 09:26:19', '2020-12-26 14:56:19'),
('821b0a334e049985f248a1ae0c0ca9383b189b80466bd80c76e8f5c95a94153fe1f25ec232cbd1dd', 1, 1, NULL, '["*"]', 0, '2019-12-27 09:03:21', '2019-12-27 09:03:21', '2020-12-27 14:33:21'),
('865f55338407184143806d89115455b1157c282e72c52b4657e866b016d2086aaf82cd4b814757c6', 1, 1, NULL, '["*"]', 0, '2020-02-12 06:46:45', '2020-02-12 06:46:45', '2021-02-12 12:16:45'),
('8ae59f6d705b3f072bea3eb2c0b895c88d6338c5c12e52fa2b521ef523b964f52dd2c04cf2e02346', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:15:21', '2019-12-30 11:15:21', '2020-12-30 16:45:21'),
('903d8cfa2627b64761e3070199ef45f636ef0b788d1f4e25b79b708f8cac51312febf02d744e015e', 1, 1, NULL, '["*"]', 0, '2020-02-12 06:47:01', '2020-02-12 06:47:01', '2021-02-12 12:17:01'),
('987be714e3aae054522d8c70d5b5000e586d0255aced9f96c1d767ba6d078c6fea6dc07935587090', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:14:20', '2019-12-30 11:14:20', '2020-12-30 16:44:20'),
('9a85272041863224c5fd6fcc0c245a3d5eda967069d05d9e813919f824dbf9e2a5e9e168cc8b82ca', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:18:22', '2019-12-30 11:18:22', '2020-12-30 16:48:22'),
('9e2636c6c52007c2756b4d11bc6dcb8932e942e7a067c7fb8060c077cbf4061e3cf178d2ec6abfc9', 1, 1, NULL, '["*"]', 0, '2019-12-27 09:03:29', '2019-12-27 09:03:29', '2020-12-27 14:33:29'),
('a796cc1d6c2c5c390aa1392092bf1d909b8ade8aa0f1a005e0b67d6fd70525be8ff443ca2c5c8f36', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:13:21', '2019-12-30 11:13:21', '2020-12-30 16:43:21'),
('aa98534d0f9594ef71e81c0bb265d96fc2128ffa1742e248723660434712f794fe2fe4416f6d9d4c', 1, 1, NULL, '["*"]', 0, '2020-01-03 06:42:39', '2020-01-03 06:42:39', '2021-01-03 12:12:39'),
('b00d6f57df14fa88271067578396c7aef5bb50a031b3fa03d51180cd2dec29801054bf5092ad3adf', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:27:50', '2019-12-26 09:27:50', '2020-12-26 14:57:50'),
('b3ddc21a5d32360a4f670bf4992acbc1e0f43a33977f382e40a420f003147e92c9f127e789420a50', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:18:33', '2019-12-30 11:18:33', '2020-12-30 16:48:33'),
('b6b3bad270412d8a61b1400d03f7b2b3645c0b8c0969635045e5c83179ed47d5cb10e199c930f1e5', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:26:13', '2019-12-26 09:26:13', '2020-12-26 14:56:13'),
('be36ccad56756fc4cb412d045fa273914b2432bd9a276700654047035bba0041c1f8ee59cf14e3ad', 1, 1, NULL, '["*"]', 0, '2019-12-27 11:05:59', '2019-12-27 11:05:59', '2020-12-27 16:35:59'),
('d797d3e022d7c0f63935b992e605f268dd5a1c0ebb80436797c67886d137ce829174b1d05ef93f09', 1, 1, NULL, '["*"]', 0, '2020-02-12 06:46:48', '2020-02-12 06:46:48', '2021-02-12 12:16:48'),
('d8b714bbc582765bd80d39bad3a1b5f6ce6e6b0729eeee9c232d9a30b27be823705d215263893a8a', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:12:08', '2019-12-30 11:12:08', '2020-12-30 16:42:08'),
('db5c1e42470ac134788a6e44d62cfd21239f478e04862c1cbcf2ba10c9d2fc5852ebf5407d3d7688', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:14:07', '2019-12-30 11:14:07', '2020-12-30 16:44:07'),
('e2da0d5bc2714815a1651ff4d91b603f3c2553d858000828fbcb4cc93815f4515f91b67b6451cd9a', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:17:41', '2019-12-30 11:17:41', '2020-12-30 16:47:41'),
('e73ee4cc69dc2810bd49202b4b6c3dcd234a0c0a36dc6f0905f05399ad94099c260b49ca049da124', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:25:43', '2019-12-26 09:25:43', '2020-12-26 14:55:43'),
('f092f3e30fb9394ef63c6308683994b58408e113e4bbbfc8d775efd5e6abb1466b13b99e528a88c9', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:29:17', '2019-12-26 09:29:17', '2020-12-26 14:59:17'),
('fe399af8dc897d6fd2bfd27ade9c365b733d4450bc5a4b8eaa3dc3aaea8d4970e9dc7c85d58d775b', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:28:58', '2019-12-26 09:28:58', '2020-12-26 14:58:58'),
('fee1760eb70c205fa652e0793196da76bad097b9fcc1ed09060be4a2a0147bec4d539f0e2be54639', 6, 1, NULL, '["*"]', 0, '2020-01-04 00:14:59', '2020-01-04 00:14:59', '2021-01-04 05:44:59');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Password Grant Client', 'yD59sSvkBzSx0l2bFhCopchZi7IZ23rsENhm0fX7', 'http://localhost', 0, 1, 0, '2019-12-24 10:57:39', '2019-12-24 10:57:39');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_refresh_tokens`
--

INSERT INTO `oauth_refresh_tokens` (`id`, `access_token_id`, `revoked`, `expires_at`) VALUES
('03124dc8e9b25ec5af5c2bc21e79a52cfa83aea7218d6059df32d71ffc26e87dde14145df9773597', 'b3ddc21a5d32360a4f670bf4992acbc1e0f43a33977f382e40a420f003147e92c9f127e789420a50', 0, '2020-12-30 16:48:33'),
('0f1c982588f743845e7b1cb1ec33f86f99f48b0cc6207278af89f5dc83e79bab67888bf403ccccbd', 'aa98534d0f9594ef71e81c0bb265d96fc2128ffa1742e248723660434712f794fe2fe4416f6d9d4c', 0, '2021-01-03 12:12:39'),
('16e24ea4608a8073a2ba5bf0332dbb5a0fe6fb9b7888d0e851d8e57bdb91126ab1bf6ee52760c6bf', 'e2da0d5bc2714815a1651ff4d91b603f3c2553d858000828fbcb4cc93815f4515f91b67b6451cd9a', 0, '2020-12-30 16:47:41'),
('1af4faa0f74791d66c9339fb120d86011faf33fc791b962133e877de4503046a32f3fec5357f5734', '2492542368a96c28dd6d133cf2656505f84d63ff2e52599bf16a189dd039ca40cb3179dd44d7624c', 0, '2020-12-25 17:17:41'),
('25d5f332f1fe2b59d34c495c48bd39a8e63900b77ba87f462562ca99252f8e7e38f68e391b4c6d80', 'e73ee4cc69dc2810bd49202b4b6c3dcd234a0c0a36dc6f0905f05399ad94099c260b49ca049da124', 0, '2020-12-26 14:55:44'),
('2d7d79a03aadeb4b92d4810189ac86bfaec728c1980344ec6813308d6e408f13c89d39f5106008e5', 'f092f3e30fb9394ef63c6308683994b58408e113e4bbbfc8d775efd5e6abb1466b13b99e528a88c9', 0, '2020-12-26 14:59:17'),
('2df044476cdd2e26064cf9e2da7446464bc225ab881a958d11b20a8fbe469cf7eb3e24be7aa39ac7', '407675d1fc965b6cfa0c699fb2c9a6a96cc763dc272c67544e00cdb41b3936b706ea047d8aeb2a11', 0, '2020-12-30 16:47:53'),
('3610354dff17e53a1b87b035d94ffe440c44bfe6c02d5dc963f9720996efb361bd09cc6e9a0cf4b9', '49da668ccd6f1a4c551a63c792c7362ab32b8a87e06ea5387ca79c10481c083b6279a681a4e78544', 0, '2020-12-30 16:20:53'),
('39e5bdf28d447d6efd1da02f9bb873b61ec232d4eadd91bf373832cd1fcae94fb6add84ee4789ea6', '111a2a53d9726c99d6cd808c80a3b1782aef7e4f0b2a4edbffc2f2f5257c8d7bbcfdd4c712db346f', 0, '2020-12-30 16:47:22'),
('3a2ab54e4a580f70dd3f73812e3735761cdec4edb041d6e24f4420d6ac8851eca7ca6fe7c99d8e1b', '3a2c9d2cf175d73d1eba72c17584a07e4ea9bdc0419fcbb4478afa083296123a497989370a57bd4b', 0, '2021-01-03 12:16:27'),
('3e3cbcee0058351a0257867e2767bce1bd1cc6df664b23824b419d92f512f38c3a9365d679ac7b38', '1fd70152537f66d673906813b2523fcc735bf8b2968ea19d13ca3e7d8f93e9046f0c93f5df039322', 0, '2021-02-12 12:16:41'),
('4db8e8226833dd663211ab23ba69f9738773033efa8a9a6e8ce55ad0fdd7c9fffadd81a7a6e05732', '987be714e3aae054522d8c70d5b5000e586d0255aced9f96c1d767ba6d078c6fea6dc07935587090', 0, '2020-12-30 16:44:20'),
('576ca26b3451c898ea396972189264d80c1fe1e6a35aa59b89cbcbad0f42234b7fd817a1a0d15909', '34c0fdbda1551c077f638fdd38b93af5d60419f65c4c0f79fe27c4b30aeeec5f999d2248a0cfe34d', 0, '2021-02-12 12:16:50'),
('5eb9ac73737ced031233ee331f47c887adc25c0245b6866792ec7d8f53435cf90d48a619facf9185', 'db5c1e42470ac134788a6e44d62cfd21239f478e04862c1cbcf2ba10c9d2fc5852ebf5407d3d7688', 0, '2020-12-30 16:44:07'),
('6550688a3a1391daad75e78fa8554da5deee1a633c3930f1dc52f1b568cf2d5034e7a6dad0771105', 'be36ccad56756fc4cb412d045fa273914b2432bd9a276700654047035bba0041c1f8ee59cf14e3ad', 0, '2020-12-27 16:35:59'),
('66f741d8c094bc0e135e0671438ea513ee645fc6d1ba603df3ac780449ff29054533f41e2065b2fa', '0322142d74bc6d52cf34d13ac1b78f4f380f862c2f0674709fef73bc85dcf0d2f6625ca0e2964351', 0, '2020-12-26 14:59:38'),
('682ad1dfc78f2b1b0e542d102a443c488eca1d62791ce5c2a26d0df4cbafbd4ed709194707ea0b11', '8ae59f6d705b3f072bea3eb2c0b895c88d6338c5c12e52fa2b521ef523b964f52dd2c04cf2e02346', 0, '2020-12-30 16:45:21'),
('759363e2980f63eb577ac445460bca09da8abd8c71b9d3f539919549b931765317e02d52a4441765', '4307fccbc3a7af1f180e4daa4c535bb3dba6a2ec17a60a14e5a7e31aa6ced376c377677f71d5a216', 0, '2020-12-26 14:58:34'),
('8344a0ff4f0df726bf6c54ba921f5563964c7cc410c5d189ed624c2eedcc90feccc4320dff799eb5', 'd8b714bbc582765bd80d39bad3a1b5f6ce6e6b0729eeee9c232d9a30b27be823705d215263893a8a', 0, '2020-12-30 16:42:08'),
('8df35405869f7ca5e15d187dcc4b93237b9af3f03bf54b3d1ff0a22cb42f966d16db1accf841dfd6', '903d8cfa2627b64761e3070199ef45f636ef0b788d1f4e25b79b708f8cac51312febf02d744e015e', 0, '2021-02-12 12:17:01'),
('934f27c6697e7fa95bfad4670ee5702244fc3a298431760ff5001476db10506c361cbba67802b6f1', '1877eb13e9ccbe9ffa00e8ef0bb8f438fa2b6d43c4ee146a6d99cebc7e0ca3e9d423c0d202f7e81a', 0, '2020-12-26 14:58:55'),
('953128ba4ab5d3fb0b91f1bb695a956f89030f7d7cc59498a1ea335a869cc5567e304baae7942cd1', 'd797d3e022d7c0f63935b992e605f268dd5a1c0ebb80436797c67886d137ce829174b1d05ef93f09', 0, '2021-02-12 12:16:49'),
('953152cde2560b9bac9cc3d73a26920ccbd59a689904e0418fb1eb5bc8abbf406b4c37a93ef6e795', 'fe399af8dc897d6fd2bfd27ade9c365b733d4450bc5a4b8eaa3dc3aaea8d4970e9dc7c85d58d775b', 0, '2020-12-26 14:58:58'),
('95a6c2510d7d7a1e2ebe9034cbae3a153a13862806f9f6d7fa9c2f58a103048098cd4041931949fe', 'b00d6f57df14fa88271067578396c7aef5bb50a031b3fa03d51180cd2dec29801054bf5092ad3adf', 0, '2020-12-26 14:57:51'),
('9d673308e368a9a2849f42d57f0f80ab67b8dfe1f9ce04fed7f90c1b7b4ed9a93d1ea67fd7410ffd', '9e2636c6c52007c2756b4d11bc6dcb8932e942e7a067c7fb8060c077cbf4061e3cf178d2ec6abfc9', 0, '2020-12-27 14:33:29'),
('b58421a74a35b3066311d3b9110a375800aa7e0b76cd84e58b5a84758181e5c8e60a83638bed8f3a', '7c2a239747f24e2e501d9ce24edb41e570510ea2fc5fee7e911fe8e806606f134b50a2f9f9f95f44', 0, '2020-12-26 14:56:19'),
('cc9dcc0037eb53c6924e33e3a331616bf02dbee3047f5f3dbecdd9d074d00d63d4308020c75c06c0', '865f55338407184143806d89115455b1157c282e72c52b4657e866b016d2086aaf82cd4b814757c6', 0, '2021-02-12 12:16:46'),
('db998bb1a9ad0a8bb6ac0f6d3abd9d2d39ad892d74763dd972325066b8920fd033d4c0808253fe51', 'a796cc1d6c2c5c390aa1392092bf1d909b8ade8aa0f1a005e0b67d6fd70525be8ff443ca2c5c8f36', 0, '2020-12-30 16:43:21'),
('e4827b7858bd2087abdd70ddfdfe9c1fdb6a3a2921b23ca7aec7854ff5a3c4f7b1c6a176e29e968c', 'fee1760eb70c205fa652e0793196da76bad097b9fcc1ed09060be4a2a0147bec4d539f0e2be54639', 0, '2021-01-04 05:44:59'),
('ea321e8aa32a1fde9b3b5520f01e0a213fe62e14008c3d8eb154ce1cb9781c9b28cd17ec59de1a9f', '9a85272041863224c5fd6fcc0c245a3d5eda967069d05d9e813919f824dbf9e2a5e9e168cc8b82ca', 0, '2020-12-30 16:48:22'),
('f3d6705d8fc875c92a250a28ec6622a27e9db7e2645028a7ea75842655307f6c0289b141d5d74898', 'b6b3bad270412d8a61b1400d03f7b2b3645c0b8c0969635045e5c83179ed47d5cb10e199c930f1e5', 0, '2020-12-26 14:56:13'),
('f5148a45606b33d24da49734a1602825c493e23a6cd51614258f697df70d2641b909319680162b76', '821b0a334e049985f248a1ae0c0ca9383b189b80466bd80c76e8f5c95a94153fe1f25ec232cbd1dd', 0, '2020-12-27 14:33:21');

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `detail` text,
  `image` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`id`, `user_id`, `name`, `price`, `duration`, `detail`, `image`, `created_at`, `updated_at`) VALUES
(4, 2, 'luna', 350, 3, 'qweqweqwe', NULL, '2019-12-26 10:48:01', '2019-12-26 10:48:01'),
(5, 2, 'package 3', 200, 6, 'we qwe wqa we qwe', NULL, '2020-01-04 06:23:36', '2020-01-04 06:23:44'),
(6, 1, 'forth package', 100, 1, 'this is our forth package', '/package/o8WZYb5SMfP7mCH7XcDr9gJcuxlTHBAj.jpg', '2020-02-14 05:29:25', '2020-02-14 05:29:25');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `staff_member_id` int(11) NOT NULL,
  `subscription_id` int(11) NOT NULL,
  `paid_amount` int(11) NOT NULL,
  `remaining_amount` int(11) NOT NULL,
  `payment_source` varchar(255) NOT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `detail` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `quantity`, `detail`, `created_at`, `updated_at`, `user_id`) VALUES
(3, 'product1', 12, 12, 'this is my first product', '2019-12-26 06:46:52', '2019-12-26 06:47:26', 2),
(4, 'product 2', 200, 10, 'this is second product...', '2019-12-27 00:09:10', '2020-02-14 00:20:29', 2);

-- --------------------------------------------------------

--
-- Table structure for table `product_sell`
--

CREATE TABLE `product_sell` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `paid_amount` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_sell`
--

INSERT INTO `product_sell` (`id`, `customer_id`, `product_id`, `quantity`, `user_id`, `paid_amount`, `created_at`, `updated_at`) VALUES
(1, 3, 4, 12, 1, 200, '2019-12-27 10:32:46', '2019-12-27 06:47:25'),
(2, 1, 3, 14, 2, 250, '2019-12-27 06:22:28', '2019-12-27 06:48:16');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'super_admin', 'web', NULL, NULL),
(2, 'manager', 'web', NULL, NULL),
(3, 'staff', 'web', NULL, NULL),
(4, 'customer', 'web', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE `subscription` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `trial_days` int(11) DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `staff_member_id` int(11) NOT NULL,
  `remark` text,
  `end_date` date NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subscription`
--

INSERT INTO `subscription` (`id`, `user_id`, `package_id`, `amount`, `duration`, `start_date`, `trial_days`, `created_at`, `updated_at`, `staff_member_id`, `remark`, `end_date`, `status`) VALUES
(1, 9, 4, 300, 3, '2020-01-02', 0, '2020-01-01 12:01:35', '2020-01-01 12:01:35', 6, NULL, '2020-01-25', 0),
(4, 15, 5, 200, 6, '2020-02-11', NULL, '2020-02-18 06:48:50', '2020-02-18 06:48:50', 1, 'sdfsd ewre', '2020-08-31', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `email_verified_at` datetime DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `gender` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `photo_url` text,
  `branch_id` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `remember_token`, `email_verified_at`, `dob`, `gender`, `first_name`, `last_name`, `phone`, `address`, `created_at`, `updated_at`, `photo_url`, `branch_id`, `is_active`) VALUES
(1, 'admin@example.com', '$2y$10$xHwKoT8fN1.UBi968uW2BOY713HDdUF2pVicMvg6/PvP.w2.f3BLu', NULL, NULL, NULL, 'male', 'admin', 'admin', '123456', 'abc near, jcb', '2019-12-25 17:17:34', '2019-12-25 17:17:34', NULL, 1, 1),
(2, 'staff@example.com', '$2y$10$xHwKoT8fN1.UBi968uW2BOY713HDdUF2pVicMvg6/PvP.w2.f3BLu', NULL, NULL, NULL, 'female', 'staff', 'staff', '1234567890', '123, streetno-5,hornplace,lonavala', '2019-12-26 04:55:24', '2019-12-26 04:55:24', NULL, 1, 1),
(3, 'customer1@gmail.com', '$2y$10$xHwKoT8fN1.UBi968uW2BOY713HDdUF2pVicMvg6/PvP.w2.f3BLu', NULL, NULL, NULL, 'male', 'customer', 'customer', '456321789', '123,ght,hjdfg jherwe', '2019-12-27 11:23:17', '2019-12-27 11:23:17', NULL, 1, 1),
(6, 'manager@example.com', '$2y$10$Ys1TdaWyINOkQPrVjDELOOG3WeQOnuBB0Ac56bnutLWeUAGssfvdq', NULL, NULL, '10/03/1923', 'male', 'manager', 'manager1', '123456789', 'abc near xyz bazar', '2019-12-31 10:58:49', '2019-12-31 10:58:49', NULL, 1, 1),
(9, 'mark@example.com', '$2y$10$vLUSqkgH2FTeqB0a4wANquJE4qoiE8GNtptj4KWDadP0lsoeMChsm', NULL, NULL, '10/03/2014', 'male', 'mark', 'martin', '123456789', 'behind abc, near jcb', '2020-01-01 12:01:35', '2020-01-01 12:01:35', NULL, 1, 1),
(11, 'staff1@example1.com', '$2y$10$2OCqczvuF5YzChymHlZPrO/mCCl9W4WyHU0UCIJf2nEEsyqznXoyW', NULL, NULL, '02/08/2000', 'female', 'staff1', 'staff1', '123123123123', 'd wew werw', '2020-01-04 05:56:32', '2020-01-04 06:16:22', NULL, 1, 1),
(12, 'test@example.com', '$2y$10$kkruPA3lT5OO2wDk/9FBPu5KbvdLsiMOhfY4l7CeD.5eT.JytNZhK', NULL, NULL, '02/08/2000', 'female', 'abc', 'xyz', '123456789', '777 Brockton Avenue', '2020-02-14 05:13:55', '2020-02-14 05:13:55', '/profile/xeJoZHteksu0ZkVhy7szqe7oamVj5PzN.jpg', 1, 1),
(15, 'test11@example.com', '$2y$10$HlBnw7NzZf2Wi6RFbk4.Suz3tT0Iaj/fEzrVlUn/TglfBzqZFPzC2', NULL, NULL, '02/08/2001', 'male', 'abc1', 'xyz1', '1234567890', '777 Brockton Avenue1', '2020-02-18 06:48:50', '2020-02-18 06:48:50', '/profile/wDRwXIb0EDuFpxipVCJaIyYiBvhfgn9k.jpg', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiry_follow_up`
--
ALTER TABLE `enquiry_follow_up`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expense`
--
ALTER TABLE `expense`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice_item`
--
ALTER TABLE `invoice_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_personal_access_clients_client_id_index` (`client_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_sell`
--
ALTER TABLE `product_sell`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `subscription`
--
ALTER TABLE `subscription`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `enquiry_follow_up`
--
ALTER TABLE `enquiry_follow_up`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `expense`
--
ALTER TABLE `expense`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `invoice_item`
--
ALTER TABLE `invoice_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `notice`
--
ALTER TABLE `notice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `package`
--
ALTER TABLE `package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `product_sell`
--
ALTER TABLE `product_sell`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `subscription`
--
ALTER TABLE `subscription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
