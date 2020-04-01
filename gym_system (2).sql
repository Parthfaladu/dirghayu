-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 01, 2020 at 07:23 PM
-- Server version: 5.7.29-0ubuntu0.16.04.1
-- PHP Version: 7.2.27-1+ubuntu16.04.1+deb.sury.org+1

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
(1, 'new branch', 'abc near jcb', 'admin', '123456789', 'test@example.com', '2019-12-25 17:17:00', '2020-02-21 07:01:11', 'Abington', 'MA', '2351'),
(2, 'branch1', 'abc', 'abc', '123456789', 'abc@example.com', '2020-02-21 07:00:55', '2020-02-21 07:00:55', 'abc', 'DC', '123456'),
(3, 'branch 3', '555, park avenew', 'mr radadiya', '123456876', 'radadiya@hotmail.com', '2020-02-26 06:55:33', '2020-02-26 06:55:33', 'solid', 'solid', '234234');

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
(1, 'Bangalore', 'Karnataka', '58642356', '5', '65', '30', '30', '30', '30', '35', 'loos weight', '2019-12-27 10:36:56', '2020-02-24 05:59:00', 3),
(3, 'kolkata', 'west bengal', '700002', '5.5', '78', '88', '77', '66', '55', '44', 'body building', '2019-12-27 11:43:09', '2019-12-27 11:43:09', 2),
(6, 'abcpur', 'gujarat', '362001', '12\'1', '50kg', '12', '32', '11', '20', '23', 'weight gain', '2020-01-01 12:01:35', '2020-01-01 12:01:35', 9),
(9, 'Abington1', 'MAA', '23512', '150', '50', '135', '140', '130', '180', '40', 'jsdh wjehrjk', '2020-02-18 06:48:50', '2020-02-18 06:48:50', 15),
(10, 'Abington', 'MA', '2351', '150', '50', '135', '140', '58', '180', '40', 'jhj jhjh jhjk', '2020-02-21 07:06:24', '2020-02-21 07:06:24', 16),
(12, 'Alquippa', 'PA', '15001', '150', '45', '132', '132', '123', '124', '123', 'rewr ewr', '2020-03-17 06:49:27', '2020-03-17 06:49:27', 18),
(13, 'Abington', 'MA', '2351', '150', '45', '135', '132', '58', '124', '123', 'sfref ewrew', '2020-03-17 06:54:04', '2020-03-17 06:54:04', 19);

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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `expense`
--

INSERT INTO `expense` (`id`, `item_name`, `purchase_date`, `bill_no`, `price`, `bill_photo`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'abc expense1', '2020-11-12', 'A230089', 35, '/expense/Jmh2DVuVitxI7DEFcXAyMShcNQzJcD3n.png', 1, '2020-02-21 06:12:23', '2020-02-21 06:19:21');

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

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `bill_to`, `customer_email`, `customer_address`, `customer_phone`, `invoice_date`, `subtotal`, `discount`, `tax`, `total`, `created_at`, `updated_at`, `user_id`) VALUES
(2, 15, 'test@example.com', '777 Brockton Avenue 123', '12345678911', '2020-09-08', 260, 20, 10, 290, '2020-02-24 11:39:04', '2020-02-25 05:50:13', 2);

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

--
-- Dumping data for table `invoice_item`
--

INSERT INTO `invoice_item` (`id`, `invoice_id`, `name`, `quantity`, `rate`, `amount`, `created_at`, `updated_at`) VALUES
(10, '2', 'product1', 10, 12, 600, '2020-02-25 05:50:13', '2020-02-25 11:20:13'),
(11, '2', 'product2', 14, 10, 420, '2020-02-25 05:50:13', '2020-02-25 11:20:13');

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
(1, 'App\\User', 1),
(3, 'App\\User', 2),
(4, 'App\\User', 3),
(2, 'App\\User', 6),
(4, 'App\\User', 9),
(3, 'App\\User', 11),
(3, 'App\\User', 12),
(4, 'App\\User', 15),
(4, 'App\\User', 16),
(4, 'App\\User', 17),
(4, 'App\\User', 18),
(4, 'App\\User', 19);

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

--
-- Dumping data for table `notice`
--

INSERT INTO `notice` (`id`, `title`, `to_id`, `from_id`, `detail`, `created_at`, `updated_at`) VALUES
(3, 'mark notice1', 9, 1, 'dewew wewr werwe edwe', '2020-02-21 05:10:16', '2020-02-21 05:11:31');

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
('08dda2d0018bd9c9fbb11fb5034011c90919265157b8855939c81e141e0744c0542781cfd9766ce5', 1, 1, NULL, '["*"]', 0, '2020-03-18 00:09:39', '2020-03-18 00:09:39', '2021-03-18 05:39:39'),
('0ce144bbb5097f8eaec696a16bbefb51ee3b3e855d53453fb990ed84365b35738d5a2fb4975e4abc', 1, 1, NULL, '["*"]', 0, '2020-03-17 23:57:11', '2020-03-17 23:57:11', '2021-03-18 05:27:11'),
('0f45a4960f55ce3b2190ccd219449b7e696d0d36ba01c5a26f1ff2edc5a561dd2596fc93b76528ec', 1, 1, NULL, '["*"]', 0, '2020-02-28 05:24:39', '2020-02-28 05:24:39', '2021-02-28 10:54:39'),
('111a2a53d9726c99d6cd808c80a3b1782aef7e4f0b2a4edbffc2f2f5257c8d7bbcfdd4c712db346f', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:17:22', '2019-12-30 11:17:22', '2020-12-30 16:47:22'),
('1877eb13e9ccbe9ffa00e8ef0bb8f438fa2b6d43c4ee146a6d99cebc7e0ca3e9d423c0d202f7e81a', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:28:55', '2019-12-26 09:28:55', '2020-12-26 14:58:55'),
('1d285825d8b19141f65575d82b3f7fd2a5ab7096c75b41a5eee75d0acaba1a4e7aa439883fbd555e', 1, 1, NULL, '["*"]', 0, '2020-02-24 10:49:28', '2020-02-24 10:49:28', '2021-02-24 16:19:28'),
('1fd70152537f66d673906813b2523fcc735bf8b2968ea19d13ca3e7d8f93e9046f0c93f5df039322', 1, 1, NULL, '["*"]', 0, '2020-02-12 06:46:40', '2020-02-12 06:46:40', '2021-02-12 12:16:40'),
('2492542368a96c28dd6d133cf2656505f84d63ff2e52599bf16a189dd039ca40cb3179dd44d7624c', 1, 1, NULL, '["*"]', 0, '2019-12-25 11:47:41', '2019-12-25 11:47:41', '2020-12-25 17:17:41'),
('2eea3479fd4c89b40b483b428c9ec2a4eea0358c4df0934cb739dfecdb05c084356fba1f741b292b', 1, 1, NULL, '["*"]', 0, '2020-03-18 00:09:48', '2020-03-18 00:09:48', '2021-03-18 05:39:48'),
('3363aa7df0f6f0d58554e75e1217f2d6fbf809d6fcd71e79b2896647194836c19c5376657ce331f4', 1, 1, NULL, '["*"]', 0, '2020-02-28 05:24:30', '2020-02-28 05:24:30', '2021-02-28 10:54:30'),
('34c0fdbda1551c077f638fdd38b93af5d60419f65c4c0f79fe27c4b30aeeec5f999d2248a0cfe34d', 1, 1, NULL, '["*"]', 0, '2020-02-12 06:46:49', '2020-02-12 06:46:49', '2021-02-12 12:16:49'),
('3a2c9d2cf175d73d1eba72c17584a07e4ea9bdc0419fcbb4478afa083296123a497989370a57bd4b', 6, 1, NULL, '["*"]', 0, '2020-01-03 06:46:27', '2020-01-03 06:46:27', '2021-01-03 12:16:27'),
('3d120d5c80c60499e6c3bba4d302fa968075e6422dfb216e2edf933120435481336f8290971b661c', 1, 1, NULL, '["*"]', 0, '2020-02-24 10:52:34', '2020-02-24 10:52:34', '2021-02-24 16:22:34'),
('407675d1fc965b6cfa0c699fb2c9a6a96cc763dc272c67544e00cdb41b3936b706ea047d8aeb2a11', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:17:53', '2019-12-30 11:17:53', '2020-12-30 16:47:53'),
('4307fccbc3a7af1f180e4daa4c535bb3dba6a2ec17a60a14e5a7e31aa6ced376c377677f71d5a216', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:28:34', '2019-12-26 09:28:34', '2020-12-26 14:58:34'),
('47fe12d2a1bbff05d0bdd8499cbc2535b74345324c80ea39a9fda2792a37d77fa65076e3c55a8388', 1, 1, NULL, '["*"]', 0, '2020-03-18 00:07:32', '2020-03-18 00:07:32', '2021-03-18 05:37:32'),
('49da668ccd6f1a4c551a63c792c7362ab32b8a87e06ea5387ca79c10481c083b6279a681a4e78544', 1, 1, NULL, '["*"]', 0, '2019-12-30 10:50:53', '2019-12-30 10:50:53', '2020-12-30 16:20:53'),
('4cc9b71de9d1f5310ada65216cb10bc7415ec09e66033fb15e18902057edaa4a14b01dc8ca942bb3', 1, 1, NULL, '["*"]', 0, '2020-03-18 00:09:48', '2020-03-18 00:09:48', '2021-03-18 05:39:48'),
('6176c857643f7db114220c1d9e8c85a89627532fe56e5e8846736b5c4ce289f93d6af591b4449e53', 1, 1, NULL, '["*"]', 0, '2020-03-18 00:07:29', '2020-03-18 00:07:29', '2021-03-18 05:37:29'),
('6873a6019d83b5f16f8700949ee39bcc74ae013cbcf30a1ca6b5ec51fbaa1d160ec4b5aafc5864d0', 1, 1, NULL, '["*"]', 0, '2020-03-17 23:57:23', '2020-03-17 23:57:23', '2021-03-18 05:27:23'),
('7c2a239747f24e2e501d9ce24edb41e570510ea2fc5fee7e911fe8e806606f134b50a2f9f9f95f44', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:26:19', '2019-12-26 09:26:19', '2020-12-26 14:56:19'),
('7d4ecb4a36d1274fa26ba7d2a2ec1fef29b616316b776726778a58454e27f442f3776eece0d1c1fe', 1, 1, NULL, '["*"]', 0, '2020-03-18 00:10:05', '2020-03-18 00:10:05', '2021-03-18 05:40:05'),
('7e3462415e0057c7cd767c7d696208a70c5cc69731e49d26eb27a3346ecb038f13e2c438a483f913', 1, 1, NULL, '["*"]', 0, '2020-02-28 05:24:31', '2020-02-28 05:24:31', '2021-02-28 10:54:31'),
('821b0a334e049985f248a1ae0c0ca9383b189b80466bd80c76e8f5c95a94153fe1f25ec232cbd1dd', 1, 1, NULL, '["*"]', 0, '2019-12-27 09:03:21', '2019-12-27 09:03:21', '2020-12-27 14:33:21'),
('83ac34333fb7863fa5bab73ffaa0419b769d39fb272edfd353bc3748b4689cd5ed446530393c2df0', 1, 1, NULL, '["*"]', 0, '2020-03-18 00:09:47', '2020-03-18 00:09:47', '2021-03-18 05:39:47'),
('865f55338407184143806d89115455b1157c282e72c52b4657e866b016d2086aaf82cd4b814757c6', 1, 1, NULL, '["*"]', 0, '2020-02-12 06:46:45', '2020-02-12 06:46:45', '2021-02-12 12:16:45'),
('8a89d17fe1f2e6ac726f28fd2f38e5d74027a62fd14b3fbfa00d21d5e17c5d3dd4defd86b8572794', 1, 1, NULL, '["*"]', 0, '2020-03-18 00:05:02', '2020-03-18 00:05:02', '2021-03-18 05:35:02'),
('8ae59f6d705b3f072bea3eb2c0b895c88d6338c5c12e52fa2b521ef523b964f52dd2c04cf2e02346', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:15:21', '2019-12-30 11:15:21', '2020-12-30 16:45:21'),
('8cc2dcac23909d17cd5e2a3db396bf25fbdcdcaa44d9daffe5bfe909298fe81b5ef886adc233eef0', 1, 1, NULL, '["*"]', 0, '2020-02-25 10:42:41', '2020-02-25 10:42:41', '2021-02-25 16:12:41'),
('903d8cfa2627b64761e3070199ef45f636ef0b788d1f4e25b79b708f8cac51312febf02d744e015e', 1, 1, NULL, '["*"]', 0, '2020-02-12 06:47:01', '2020-02-12 06:47:01', '2021-02-12 12:17:01'),
('987be714e3aae054522d8c70d5b5000e586d0255aced9f96c1d767ba6d078c6fea6dc07935587090', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:14:20', '2019-12-30 11:14:20', '2020-12-30 16:44:20'),
('9a85272041863224c5fd6fcc0c245a3d5eda967069d05d9e813919f824dbf9e2a5e9e168cc8b82ca', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:18:22', '2019-12-30 11:18:22', '2020-12-30 16:48:22'),
('9dd22c9edbc55e92edf4318d549d1952f35d63da5f561df0951db20307436ec99fbaab7ac012339e', 1, 1, NULL, '["*"]', 0, '2020-02-24 10:47:34', '2020-02-24 10:47:34', '2021-02-24 16:17:34'),
('9e2636c6c52007c2756b4d11bc6dcb8932e942e7a067c7fb8060c077cbf4061e3cf178d2ec6abfc9', 1, 1, NULL, '["*"]', 0, '2019-12-27 09:03:29', '2019-12-27 09:03:29', '2020-12-27 14:33:29'),
('a311478edfeda52bfbdadf3d3d5a09bf96551d68b57ff72913851e60db1efa959b23fe4c959ab420', 1, 1, NULL, '["*"]', 0, '2020-03-18 00:09:46', '2020-03-18 00:09:46', '2021-03-18 05:39:46'),
('a796cc1d6c2c5c390aa1392092bf1d909b8ade8aa0f1a005e0b67d6fd70525be8ff443ca2c5c8f36', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:13:21', '2019-12-30 11:13:21', '2020-12-30 16:43:21'),
('aa98534d0f9594ef71e81c0bb265d96fc2128ffa1742e248723660434712f794fe2fe4416f6d9d4c', 1, 1, NULL, '["*"]', 0, '2020-01-03 06:42:39', '2020-01-03 06:42:39', '2021-01-03 12:12:39'),
('aefd37d9c62a2d2c65750fe041e61ac463bf5006c4cfc130ccac2479931ed9d3726082baac2039ee', 1, 1, NULL, '["*"]', 0, '2020-02-24 10:52:02', '2020-02-24 10:52:02', '2021-02-24 16:22:02'),
('b00d6f57df14fa88271067578396c7aef5bb50a031b3fa03d51180cd2dec29801054bf5092ad3adf', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:27:50', '2019-12-26 09:27:50', '2020-12-26 14:57:50'),
('b07e3fbc46e29601f9483b239c0e476a0e92bb9412281f8375b765c9b7ff4364dbf44026c2f8875a', 1, 1, NULL, '["*"]', 0, '2020-03-18 00:07:46', '2020-03-18 00:07:46', '2021-03-18 05:37:46'),
('b3ddc21a5d32360a4f670bf4992acbc1e0f43a33977f382e40a420f003147e92c9f127e789420a50', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:18:33', '2019-12-30 11:18:33', '2020-12-30 16:48:33'),
('b6b3bad270412d8a61b1400d03f7b2b3645c0b8c0969635045e5c83179ed47d5cb10e199c930f1e5', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:26:13', '2019-12-26 09:26:13', '2020-12-26 14:56:13'),
('be36ccad56756fc4cb412d045fa273914b2432bd9a276700654047035bba0041c1f8ee59cf14e3ad', 1, 1, NULL, '["*"]', 0, '2019-12-27 11:05:59', '2019-12-27 11:05:59', '2020-12-27 16:35:59'),
('bfdf41463c020aa4d3c56dfade3878cff7ef1e28af049ababe3ce193ef72f2366526aa815a5a0ead', 1, 1, NULL, '["*"]', 0, '2020-03-18 00:04:50', '2020-03-18 00:04:50', '2021-03-18 05:34:50'),
('c2a2c810a6bf1a8bbf760da207a1f6784f67926905bf078911d2029eef8f7522cf567960d9edd9e1', 1, 1, NULL, '["*"]', 0, '2020-02-25 05:47:09', '2020-02-25 05:47:09', '2021-02-25 11:17:09'),
('c56f0f6f9af95b695e0d7d7c25d6ade9aa23071d8c270b26da51696ad71b00b462a0a71854141238', 1, 1, NULL, '["*"]', 0, '2020-02-25 10:42:42', '2020-02-25 10:42:42', '2021-02-25 16:12:42'),
('d0585b94cf4393793febe1eee2a0ddbe3f89170513c1fc66c28a330906a877f0806e2c4898e2d4eb', 1, 1, NULL, '["*"]', 0, '2020-03-18 00:05:36', '2020-03-18 00:05:36', '2021-03-18 05:35:36'),
('d3391a006c53e1ad2875106cef2ec81fa852af1c153b1481fc88ae62267059d848c96da9fecfaeaf', 1, 1, NULL, '["*"]', 0, '2020-02-24 10:50:31', '2020-02-24 10:50:31', '2021-02-24 16:20:31'),
('d797d3e022d7c0f63935b992e605f268dd5a1c0ebb80436797c67886d137ce829174b1d05ef93f09', 1, 1, NULL, '["*"]', 0, '2020-02-12 06:46:48', '2020-02-12 06:46:48', '2021-02-12 12:16:48'),
('d8b714bbc582765bd80d39bad3a1b5f6ce6e6b0729eeee9c232d9a30b27be823705d215263893a8a', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:12:08', '2019-12-30 11:12:08', '2020-12-30 16:42:08'),
('d90565c33978358e8361d9f12ab201f35e6f9f32487c51a1083215f6ee3dc772b7c09d19b3b8dd54', 1, 1, NULL, '["*"]', 0, '2020-02-28 05:24:25', '2020-02-28 05:24:25', '2021-02-28 10:54:25'),
('db5c1e42470ac134788a6e44d62cfd21239f478e04862c1cbcf2ba10c9d2fc5852ebf5407d3d7688', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:14:07', '2019-12-30 11:14:07', '2020-12-30 16:44:07'),
('e2da0d5bc2714815a1651ff4d91b603f3c2553d858000828fbcb4cc93815f4515f91b67b6451cd9a', 1, 1, NULL, '["*"]', 0, '2019-12-30 11:17:41', '2019-12-30 11:17:41', '2020-12-30 16:47:41'),
('e73ee4cc69dc2810bd49202b4b6c3dcd234a0c0a36dc6f0905f05399ad94099c260b49ca049da124', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:25:43', '2019-12-26 09:25:43', '2020-12-26 14:55:43'),
('f092f3e30fb9394ef63c6308683994b58408e113e4bbbfc8d775efd5e6abb1466b13b99e528a88c9', 1, 1, NULL, '["*"]', 0, '2019-12-26 09:29:17', '2019-12-26 09:29:17', '2020-12-26 14:59:17'),
('f88682c59479567aa34955875474729d6f0f3367bfb5acb90a2f35341669ed908fc580db7234a80b', 1, 1, NULL, '["*"]', 0, '2020-02-28 05:24:27', '2020-02-28 05:24:27', '2021-02-28 10:54:27'),
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
('04c395ae5cb404b0d1dfad6cbf7799ecb98a7f06f03d29db163d173427b49c42b05ea86e73792a79', '08dda2d0018bd9c9fbb11fb5034011c90919265157b8855939c81e141e0744c0542781cfd9766ce5', 0, '2021-03-18 05:39:39'),
('0f1c982588f743845e7b1cb1ec33f86f99f48b0cc6207278af89f5dc83e79bab67888bf403ccccbd', 'aa98534d0f9594ef71e81c0bb265d96fc2128ffa1742e248723660434712f794fe2fe4416f6d9d4c', 0, '2021-01-03 12:12:39'),
('101a7b15e9e6bfff87a6b8ad7cda4fe94d4114d98df979d054c4a181792417009db51ea9eef5f8fe', 'c2a2c810a6bf1a8bbf760da207a1f6784f67926905bf078911d2029eef8f7522cf567960d9edd9e1', 0, '2021-02-25 11:17:09'),
('1338201c8b540fe298f623f13ee53efa3cf873396f9ce1769cc1794dd3b2e788b0b9869c819742c7', '7d4ecb4a36d1274fa26ba7d2a2ec1fef29b616316b776726778a58454e27f442f3776eece0d1c1fe', 0, '2021-03-18 05:40:05'),
('1646e74122bff2c44d8795db8b1cbd536419073a47f75e96a8ed3d53050fe53791d37dd38b70593e', '1d285825d8b19141f65575d82b3f7fd2a5ab7096c75b41a5eee75d0acaba1a4e7aa439883fbd555e', 0, '2021-02-24 16:19:28'),
('16e24ea4608a8073a2ba5bf0332dbb5a0fe6fb9b7888d0e851d8e57bdb91126ab1bf6ee52760c6bf', 'e2da0d5bc2714815a1651ff4d91b603f3c2553d858000828fbcb4cc93815f4515f91b67b6451cd9a', 0, '2020-12-30 16:47:41'),
('1af4faa0f74791d66c9339fb120d86011faf33fc791b962133e877de4503046a32f3fec5357f5734', '2492542368a96c28dd6d133cf2656505f84d63ff2e52599bf16a189dd039ca40cb3179dd44d7624c', 0, '2020-12-25 17:17:41'),
('25927f2518765e0055343959f3887d218fdc9f1ee580ae83d70c46c3ccc24835c08cdfeac7491140', '6873a6019d83b5f16f8700949ee39bcc74ae013cbcf30a1ca6b5ec51fbaa1d160ec4b5aafc5864d0', 0, '2021-03-18 05:27:23'),
('25d5f332f1fe2b59d34c495c48bd39a8e63900b77ba87f462562ca99252f8e7e38f68e391b4c6d80', 'e73ee4cc69dc2810bd49202b4b6c3dcd234a0c0a36dc6f0905f05399ad94099c260b49ca049da124', 0, '2020-12-26 14:55:44'),
('2d7d79a03aadeb4b92d4810189ac86bfaec728c1980344ec6813308d6e408f13c89d39f5106008e5', 'f092f3e30fb9394ef63c6308683994b58408e113e4bbbfc8d775efd5e6abb1466b13b99e528a88c9', 0, '2020-12-26 14:59:17'),
('2df044476cdd2e26064cf9e2da7446464bc225ab881a958d11b20a8fbe469cf7eb3e24be7aa39ac7', '407675d1fc965b6cfa0c699fb2c9a6a96cc763dc272c67544e00cdb41b3936b706ea047d8aeb2a11', 0, '2020-12-30 16:47:53'),
('314c2eb3c269918c217dfe3a5ee2de91ad4041f0e2446828dcb55ea264e482f4abf1793c7a9c54ca', '0f45a4960f55ce3b2190ccd219449b7e696d0d36ba01c5a26f1ff2edc5a561dd2596fc93b76528ec', 0, '2021-02-28 10:54:39'),
('33ea70509264e747dfe4416728aa518e23fb3c2b3c140f16dff107aff248fe782997c64bddf07fc3', 'a311478edfeda52bfbdadf3d3d5a09bf96551d68b57ff72913851e60db1efa959b23fe4c959ab420', 0, '2021-03-18 05:39:46'),
('3610354dff17e53a1b87b035d94ffe440c44bfe6c02d5dc963f9720996efb361bd09cc6e9a0cf4b9', '49da668ccd6f1a4c551a63c792c7362ab32b8a87e06ea5387ca79c10481c083b6279a681a4e78544', 0, '2020-12-30 16:20:53'),
('365363c2059512e53c97380a7c2daaddd10045b46d8f5352214ff1be2436b5ec976b6e4490cfd6f6', '6176c857643f7db114220c1d9e8c85a89627532fe56e5e8846736b5c4ce289f93d6af591b4449e53', 0, '2021-03-18 05:37:29'),
('39e5bdf28d447d6efd1da02f9bb873b61ec232d4eadd91bf373832cd1fcae94fb6add84ee4789ea6', '111a2a53d9726c99d6cd808c80a3b1782aef7e4f0b2a4edbffc2f2f5257c8d7bbcfdd4c712db346f', 0, '2020-12-30 16:47:22'),
('3a2ab54e4a580f70dd3f73812e3735761cdec4edb041d6e24f4420d6ac8851eca7ca6fe7c99d8e1b', '3a2c9d2cf175d73d1eba72c17584a07e4ea9bdc0419fcbb4478afa083296123a497989370a57bd4b', 0, '2021-01-03 12:16:27'),
('3cf4e509dc84af6a95df70d530667857b85506ff721dfda062b9e9f46cdfae75a960c9bc9c0ef541', '4cc9b71de9d1f5310ada65216cb10bc7415ec09e66033fb15e18902057edaa4a14b01dc8ca942bb3', 0, '2021-03-18 05:39:48'),
('3df34d528667d40450b8d38c57f7bbe6a91a63617483a396f8e43187836cfdbd99c92286b3d92a68', '47fe12d2a1bbff05d0bdd8499cbc2535b74345324c80ea39a9fda2792a37d77fa65076e3c55a8388', 0, '2021-03-18 05:37:32'),
('3e3cbcee0058351a0257867e2767bce1bd1cc6df664b23824b419d92f512f38c3a9365d679ac7b38', '1fd70152537f66d673906813b2523fcc735bf8b2968ea19d13ca3e7d8f93e9046f0c93f5df039322', 0, '2021-02-12 12:16:41'),
('4db8e8226833dd663211ab23ba69f9738773033efa8a9a6e8ce55ad0fdd7c9fffadd81a7a6e05732', '987be714e3aae054522d8c70d5b5000e586d0255aced9f96c1d767ba6d078c6fea6dc07935587090', 0, '2020-12-30 16:44:20'),
('4f3d8e90cc654b30cb15cfd97fac0a8e7fadb0085e0e7c819555e8c3d51253812cd010d04451af2f', '7e3462415e0057c7cd767c7d696208a70c5cc69731e49d26eb27a3346ecb038f13e2c438a483f913', 0, '2021-02-28 10:54:31'),
('576ca26b3451c898ea396972189264d80c1fe1e6a35aa59b89cbcbad0f42234b7fd817a1a0d15909', '34c0fdbda1551c077f638fdd38b93af5d60419f65c4c0f79fe27c4b30aeeec5f999d2248a0cfe34d', 0, '2021-02-12 12:16:50'),
('5c06cc2dc2fd5a1ab8a27b2b79012d96ffb9af73a78b64ca1efd3c9a4964aedf25e75b4dcc69c214', 'bfdf41463c020aa4d3c56dfade3878cff7ef1e28af049ababe3ce193ef72f2366526aa815a5a0ead', 0, '2021-03-18 05:34:50'),
('5eb9ac73737ced031233ee331f47c887adc25c0245b6866792ec7d8f53435cf90d48a619facf9185', 'db5c1e42470ac134788a6e44d62cfd21239f478e04862c1cbcf2ba10c9d2fc5852ebf5407d3d7688', 0, '2020-12-30 16:44:07'),
('61c9d893e6a7fa005ef6c8753efa1d7e6fd6b7a6665c87b59fc0eb630496fba790ea35dacad245bc', '2eea3479fd4c89b40b483b428c9ec2a4eea0358c4df0934cb739dfecdb05c084356fba1f741b292b', 0, '2021-03-18 05:39:48'),
('6550688a3a1391daad75e78fa8554da5deee1a633c3930f1dc52f1b568cf2d5034e7a6dad0771105', 'be36ccad56756fc4cb412d045fa273914b2432bd9a276700654047035bba0041c1f8ee59cf14e3ad', 0, '2020-12-27 16:35:59'),
('66f741d8c094bc0e135e0671438ea513ee645fc6d1ba603df3ac780449ff29054533f41e2065b2fa', '0322142d74bc6d52cf34d13ac1b78f4f380f862c2f0674709fef73bc85dcf0d2f6625ca0e2964351', 0, '2020-12-26 14:59:38'),
('682ad1dfc78f2b1b0e542d102a443c488eca1d62791ce5c2a26d0df4cbafbd4ed709194707ea0b11', '8ae59f6d705b3f072bea3eb2c0b895c88d6338c5c12e52fa2b521ef523b964f52dd2c04cf2e02346', 0, '2020-12-30 16:45:21'),
('6d08ae05c85243882447d49bf81fab0ac0645f1301c6b369fa469f8b1e68818c98fb88dac3762bd4', '83ac34333fb7863fa5bab73ffaa0419b769d39fb272edfd353bc3748b4689cd5ed446530393c2df0', 0, '2021-03-18 05:39:47'),
('759363e2980f63eb577ac445460bca09da8abd8c71b9d3f539919549b931765317e02d52a4441765', '4307fccbc3a7af1f180e4daa4c535bb3dba6a2ec17a60a14e5a7e31aa6ced376c377677f71d5a216', 0, '2020-12-26 14:58:34'),
('825019fb67fb9c9e41b9310bad449aab92cf3e1feac8ac211000e0340c0cb9340438575e7ac928d6', 'd3391a006c53e1ad2875106cef2ec81fa852af1c153b1481fc88ae62267059d848c96da9fecfaeaf', 0, '2021-02-24 16:20:31'),
('8344a0ff4f0df726bf6c54ba921f5563964c7cc410c5d189ed624c2eedcc90feccc4320dff799eb5', 'd8b714bbc582765bd80d39bad3a1b5f6ce6e6b0729eeee9c232d9a30b27be823705d215263893a8a', 0, '2020-12-30 16:42:08'),
('8df35405869f7ca5e15d187dcc4b93237b9af3f03bf54b3d1ff0a22cb42f966d16db1accf841dfd6', '903d8cfa2627b64761e3070199ef45f636ef0b788d1f4e25b79b708f8cac51312febf02d744e015e', 0, '2021-02-12 12:17:01'),
('934f27c6697e7fa95bfad4670ee5702244fc3a298431760ff5001476db10506c361cbba67802b6f1', '1877eb13e9ccbe9ffa00e8ef0bb8f438fa2b6d43c4ee146a6d99cebc7e0ca3e9d423c0d202f7e81a', 0, '2020-12-26 14:58:55'),
('953128ba4ab5d3fb0b91f1bb695a956f89030f7d7cc59498a1ea335a869cc5567e304baae7942cd1', 'd797d3e022d7c0f63935b992e605f268dd5a1c0ebb80436797c67886d137ce829174b1d05ef93f09', 0, '2021-02-12 12:16:49'),
('953152cde2560b9bac9cc3d73a26920ccbd59a689904e0418fb1eb5bc8abbf406b4c37a93ef6e795', 'fe399af8dc897d6fd2bfd27ade9c365b733d4450bc5a4b8eaa3dc3aaea8d4970e9dc7c85d58d775b', 0, '2020-12-26 14:58:58'),
('95a6c2510d7d7a1e2ebe9034cbae3a153a13862806f9f6d7fa9c2f58a103048098cd4041931949fe', 'b00d6f57df14fa88271067578396c7aef5bb50a031b3fa03d51180cd2dec29801054bf5092ad3adf', 0, '2020-12-26 14:57:51'),
('9d673308e368a9a2849f42d57f0f80ab67b8dfe1f9ce04fed7f90c1b7b4ed9a93d1ea67fd7410ffd', '9e2636c6c52007c2756b4d11bc6dcb8932e942e7a067c7fb8060c077cbf4061e3cf178d2ec6abfc9', 0, '2020-12-27 14:33:29'),
('a7958fd2f623e70a81a29673a0c2190ff7af097e70a51fd80f323abe63eaa30293a363751a8d56e6', 'd0585b94cf4393793febe1eee2a0ddbe3f89170513c1fc66c28a330906a877f0806e2c4898e2d4eb', 0, '2021-03-18 05:35:36'),
('b58421a74a35b3066311d3b9110a375800aa7e0b76cd84e58b5a84758181e5c8e60a83638bed8f3a', '7c2a239747f24e2e501d9ce24edb41e570510ea2fc5fee7e911fe8e806606f134b50a2f9f9f95f44', 0, '2020-12-26 14:56:19'),
('b5fcad49c6a9030eee2592f5a8527fac9ea664f35aa0a515137eff6d0b4136275a7202dbf2676293', 'c56f0f6f9af95b695e0d7d7c25d6ade9aa23071d8c270b26da51696ad71b00b462a0a71854141238', 0, '2021-02-25 16:12:42'),
('c0b471be7a133d37583c2009573a78a4b2737f7304fc708d432de2183e62f9dfaa8e15ddc84e3313', '3d120d5c80c60499e6c3bba4d302fa968075e6422dfb216e2edf933120435481336f8290971b661c', 0, '2021-02-24 16:22:34'),
('cc9dcc0037eb53c6924e33e3a331616bf02dbee3047f5f3dbecdd9d074d00d63d4308020c75c06c0', '865f55338407184143806d89115455b1157c282e72c52b4657e866b016d2086aaf82cd4b814757c6', 0, '2021-02-12 12:16:46'),
('ce0d58fbbccd3f710fe6946d1d8253033dbb9dd2b33c468e1eb6c2f7a6f4b2cb9b60e7c695b5ab72', 'aefd37d9c62a2d2c65750fe041e61ac463bf5006c4cfc130ccac2479931ed9d3726082baac2039ee', 0, '2021-02-24 16:22:02'),
('d1a860f20546ec92e354ce3bad16c78a6fcec5b1f56ee61ff196aa352a581ec21805529456cfddc0', '8cc2dcac23909d17cd5e2a3db396bf25fbdcdcaa44d9daffe5bfe909298fe81b5ef886adc233eef0', 0, '2021-02-25 16:12:41'),
('d569ff2d77263b6e18f7ac1f1838e627d6087b552a219642754b361a547f5645e44b96121d624d55', 'd90565c33978358e8361d9f12ab201f35e6f9f32487c51a1083215f6ee3dc772b7c09d19b3b8dd54', 0, '2021-02-28 10:54:25'),
('db998bb1a9ad0a8bb6ac0f6d3abd9d2d39ad892d74763dd972325066b8920fd033d4c0808253fe51', 'a796cc1d6c2c5c390aa1392092bf1d909b8ade8aa0f1a005e0b67d6fd70525be8ff443ca2c5c8f36', 0, '2020-12-30 16:43:21'),
('e4827b7858bd2087abdd70ddfdfe9c1fdb6a3a2921b23ca7aec7854ff5a3c4f7b1c6a176e29e968c', 'fee1760eb70c205fa652e0793196da76bad097b9fcc1ed09060be4a2a0147bec4d539f0e2be54639', 0, '2021-01-04 05:44:59'),
('e666375ee03768a8b325ce3d0cf57f85fa23c93d2ff7e8287cad580bbd9198d8820ad7e780b75e4b', '3363aa7df0f6f0d58554e75e1217f2d6fbf809d6fcd71e79b2896647194836c19c5376657ce331f4', 0, '2021-02-28 10:54:30'),
('ea321e8aa32a1fde9b3b5520f01e0a213fe62e14008c3d8eb154ce1cb9781c9b28cd17ec59de1a9f', '9a85272041863224c5fd6fcc0c245a3d5eda967069d05d9e813919f824dbf9e2a5e9e168cc8b82ca', 0, '2020-12-30 16:48:22'),
('ee3237c2b706545bf242d238886786388b119b0c5e1b0258490a088e04e179842eb783590a24e332', '0ce144bbb5097f8eaec696a16bbefb51ee3b3e855d53453fb990ed84365b35738d5a2fb4975e4abc', 0, '2021-03-18 05:27:11'),
('f3d6705d8fc875c92a250a28ec6622a27e9db7e2645028a7ea75842655307f6c0289b141d5d74898', 'b6b3bad270412d8a61b1400d03f7b2b3645c0b8c0969635045e5c83179ed47d5cb10e199c930f1e5', 0, '2020-12-26 14:56:13'),
('f4598525eb5343f87d63feaf5a8f1791e820f508a681e50a5977a4880400b69d3aefe8766ad0ce3a', '8a89d17fe1f2e6ac726f28fd2f38e5d74027a62fd14b3fbfa00d21d5e17c5d3dd4defd86b8572794', 0, '2021-03-18 05:35:02'),
('f5148a45606b33d24da49734a1602825c493e23a6cd51614258f697df70d2641b909319680162b76', '821b0a334e049985f248a1ae0c0ca9383b189b80466bd80c76e8f5c95a94153fe1f25ec232cbd1dd', 0, '2020-12-27 14:33:21'),
('f577a40aa0972ac9a640953e9941bc6b15ba1f5bec1c70cfa5426873dd0f236af5dd00d969dc69d2', 'f88682c59479567aa34955875474729d6f0f3367bfb5acb90a2f35341669ed908fc580db7234a80b', 0, '2021-02-28 10:54:27'),
('f6c14e557eecd8260dae8633d62007050d9d9bc9c7ea3c85f5d863067020aacca3617489ce3de94b', '9dd22c9edbc55e92edf4318d549d1952f35d63da5f561df0951db20307436ec99fbaab7ac012339e', 0, '2021-02-24 16:17:34'),
('f7285ca6b2072f698dac5858d21d3bc197ee1890d0d7f816aa65b40b4d0dc728d56e5934c2f9c241', 'b07e3fbc46e29601f9483b239c0e476a0e92bb9412281f8375b765c9b7ff4364dbf44026c2f8875a', 0, '2021-03-18 05:37:46');

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `id` int(11) NOT NULL,
  `staff_member_id` int(11) NOT NULL,
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

INSERT INTO `package` (`id`, `staff_member_id`, `name`, `price`, `duration`, `detail`, `image`, `created_at`, `updated_at`) VALUES
(4, 2, 'package 2', 300, 3, 'qweqweqwe', NULL, '2019-12-26 10:48:01', '2019-12-26 10:48:01'),
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

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `staff_member_id`, `subscription_id`, `paid_amount`, `remaining_amount`, `payment_source`, `remark`, `created_at`, `updated_at`) VALUES
(2, 1, 5, 50, 50, 'cash', 'second payment', '2020-02-19 11:13:37', '2020-02-19 11:13:37'),
(3, 1, 5, 10, 40, 'cash', 'third payment', '2020-02-19 11:18:40', '2020-02-19 11:18:40'),
(4, 1, 4, 100, 100, 'credit_card', 'first payment', '2020-02-19 06:30:02', '2020-02-19 06:30:02'),
(5, 1, 6, 20, 80, 'cash', 'first payment', '2020-02-19 06:42:59', '2020-02-19 06:42:59'),
(6, 1, 1, 100, 200, 'cash', 'werew werew', '2020-02-26 06:24:16', '2020-02-26 06:24:16');

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
(4, 'product 2', 200, 10, 'this is second product...', '2019-12-27 00:09:10', '2020-02-14 00:20:29', 2),
(5, 'product12', 100, 1, 'product12', '2020-02-26 06:46:25', '2020-02-26 06:46:25', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_sell`
--

CREATE TABLE `product_sell` (
  `id` int(11) NOT NULL,
  `staff_member_id` int(11) NOT NULL,
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

INSERT INTO `product_sell` (`id`, `staff_member_id`, `product_id`, `quantity`, `user_id`, `paid_amount`, `created_at`, `updated_at`) VALUES
(1, 1, 3, 10, 15, 12, '2020-02-25 06:03:37', '2020-02-25 06:03:37'),
(2, 1, 4, 12, 9, 10, '2020-02-25 06:06:09', '2020-02-25 06:06:09');

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
  `status` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subscription`
--

INSERT INTO `subscription` (`id`, `user_id`, `package_id`, `amount`, `duration`, `start_date`, `trial_days`, `created_at`, `updated_at`, `staff_member_id`, `remark`, `end_date`, `status`) VALUES
(1, 9, 4, 300, 3, '2020-01-02', 0, '2020-01-01 12:01:35', '2020-01-01 12:01:35', 6, NULL, '2020-01-25', 0),
(4, 15, 5, 200, 6, '2020-02-11', 0, '2020-02-18 06:48:50', '2020-02-18 06:48:50', 1, 'sdfsd ewre', '2020-08-31', 1),
(5, 15, 4, 300, 3, '2020-02-29', 0, '2020-02-19 05:56:31', '2020-02-19 05:56:31', 1, NULL, '2020-05-31', 1),
(6, 15, 6, 100, 1, '2020-02-29', 0, '2020-02-19 05:56:31', '2020-02-19 05:56:31', 1, NULL, '2020-03-31', 1),
(7, 9, 5, 200, 6, '2020-06-21', 0, '2020-02-21 05:24:53', '2020-02-21 05:26:05', 1, 'edew ererf erer sdfsd', '2020-12-31', 1),
(8, 16, 5, 200, 6, '2020-02-13', NULL, '2020-02-21 07:06:24', '2020-02-21 07:06:24', 1, 'fdd dgdgd dgrt', '2020-08-31', 1),
(10, 18, 5, 200, 6, '2020-03-17', NULL, '2020-03-17 06:49:27', '2020-03-17 06:49:27', 1, 'ewr erete ewr', '2020-09-30', 1),
(11, 19, 6, 100, 1, '2020-03-17', NULL, '2020-03-17 06:54:04', '2020-03-17 06:54:04', 1, 'sfresf er', '2020-04-30', 1);

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
  `is_active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `remember_token`, `email_verified_at`, `dob`, `gender`, `first_name`, `last_name`, `phone`, `address`, `created_at`, `updated_at`, `photo_url`, `is_active`) VALUES
(1, 'admin@example.com', '$2y$10$xHwKoT8fN1.UBi968uW2BOY713HDdUF2pVicMvg6/PvP.w2.f3BLu', NULL, NULL, NULL, 'male', 'admin', 'admin', '123456', 'abc near, jcb', '2019-12-25 17:17:34', '2019-12-25 17:17:34', NULL, 1),
(2, 'staff@example.com', '$2y$10$3BeJ1ufTs3.Fk6xnFfYEIepYMvG.mHLOOQSgPo74UHaEU/FGHZ.V6', NULL, NULL, '02/08/2000', 'female', 'staff', 'staff', '1234567890', '123, streetno-5,hornplace,lonavala', '2019-12-26 04:55:24', '2020-03-17 05:14:56', '/profile/lkMapCXvpgcHwetRKwygdQWT5TWRCe8b.png', 1),
(3, 'customer11@gmail.com', '$2y$10$l59wEGka6Ban6oS5OEO15uaX9.u5kravK22qxgSGeDxPP2oT6rZoG', NULL, NULL, '02/08/2000', 'male', 'customer', 'customer', '456321789', '123,ght,hjdfg jherwe', '2019-12-27 11:23:17', '2020-02-24 05:59:00', '/profile/5mMoBSpRnxmQJz0Y4ydKuwE7gDjVErEf.png', 1),
(6, 'manager@example.com', '$2y$10$Ys1TdaWyINOkQPrVjDELOOG3WeQOnuBB0Ac56bnutLWeUAGssfvdq', NULL, NULL, '10/03/1923', 'male', 'manager', 'manager1', '123456789', 'abc near xyz bazar', '2019-12-31 10:58:49', '2019-12-31 10:58:49', NULL, 1),
(9, 'mark@example.com', '$2y$10$vLUSqkgH2FTeqB0a4wANquJE4qoiE8GNtptj4KWDadP0lsoeMChsm', NULL, NULL, '10/03/2014', 'male', 'mark', 'martin', '123456789', 'behind abc, near jcb', '2020-01-01 12:01:35', '2020-01-01 12:01:35', NULL, 1),
(11, 'staff1@example1.com', '$2y$10$2OCqczvuF5YzChymHlZPrO/mCCl9W4WyHU0UCIJf2nEEsyqznXoyW', NULL, NULL, '02/08/2000', 'female', 'staff1', 'staff1', '123123123123', 'd wew werw', '2020-01-04 05:56:32', '2020-01-04 06:16:22', NULL, 1),
(12, 'test@example.com', '$2y$10$kkruPA3lT5OO2wDk/9FBPu5KbvdLsiMOhfY4l7CeD.5eT.JytNZhK', NULL, NULL, '02/08/2000', 'female', 'abc', 'xyz', '123456789', '777 Brockton Avenue', '2020-02-14 05:13:55', '2020-02-14 05:13:55', '/profile/xeJoZHteksu0ZkVhy7szqe7oamVj5PzN.jpg', 1),
(15, 'test11@example.com', '$2y$10$HlBnw7NzZf2Wi6RFbk4.Suz3tT0Iaj/fEzrVlUn/TglfBzqZFPzC2', NULL, NULL, '02/08/2001', 'male', 'abc1', 'xyz1', '1234567890', '777 Brockton Avenue1', '2020-02-18 06:48:50', '2020-02-18 06:48:50', '/profile/wDRwXIb0EDuFpxipVCJaIyYiBvhfgn9k.jpg', 1),
(16, 'new@gmail.com', '$2y$10$1A9GGzIHtKm1PhJEwzelU.yo94AdNQiTO3N4LtW4YzT6u2Ey9aqea', NULL, NULL, '02/08/2000', 'male', 'new', 'new', '123456789', '777 Brockton Avenue', '2020-02-21 07:06:24', '2020-02-21 07:06:24', NULL, 1),
(18, 'newtest121@example.com', '$2y$10$8cKiAxonrgT2fTb2XUgiYeLyxsDyngw/88nsMGV.6WA7JGFsTYXFq', NULL, NULL, '02/08/2000', 'female', 'new test121', 'new test121', '0123456789', '572  Stuart Street', '2020-03-17 06:49:27', '2020-03-17 06:49:27', NULL, 1),
(19, 'test@example.com', '$2y$10$5ujVBYjZ0awGh4pjmjG8VemRDA1PjbLnMKKeoBQ5d/5S0riEgDSWu', NULL, NULL, '02/08/2000', 'female', 'abc', 'xyz', '0123456789', '777 Brockton Avenue', '2020-03-17 06:54:04', '2020-03-17 06:54:04', NULL, 1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `invoice_item`
--
ALTER TABLE `invoice_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `notice`
--
ALTER TABLE `notice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
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
