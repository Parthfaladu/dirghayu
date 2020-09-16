-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 13, 2020 at 05:33 PM
-- Server version: 5.7.29-0ubuntu0.16.04.1
-- PHP Version: 7.1.33-3+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gym_system_production`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`id`, `user_id`, `date`, `created_at`, `updated_at`) VALUES
(1, 2, '2020-04-18', '2020-04-18 06:32:56', '2020-04-18 06:32:56');

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `incharge_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zipcode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `currency`
--

CREATE TABLE `currency` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `symbol` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `currency`
--

INSERT INTO `currency` (`id`, `title`, `symbol`, `created_at`, `updated_at`) VALUES
(1, 'Dollar', '$', '2020-04-17 07:31:07', '2020-04-17 07:31:07'),
(2, 'Euro', '€', '2020-04-17 07:31:07', '2020-04-17 07:31:07'),
(3, 'Pound', '£', '2020-04-17 07:31:07', '2020-04-17 07:31:07'),
(4, 'Yuan', '¥', '2020-04-17 07:31:07', '2020-04-17 07:31:07'),
(5, 'Indian Rupee', '₹', '2020-04-17 07:31:07', '2020-04-17 07:31:07'),
(6, 'Yen', '¥', '2020-04-17 07:31:07', '2020-04-17 07:31:07'),
(7, 'Russian Ruble', 'р.', '2020-04-17 07:31:07', '2020-04-17 07:31:07');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `user_id`, `city`, `state`, `zipcode`, `height`, `weight`, `chest`, `waist`, `thigh`, `arms`, `fat`, `interested_area`, `created_at`, `updated_at`) VALUES
(1, 4, 'Anomica', 'Tralica', '123456', '182', '68', '24', '28', '35', '10', '17', NULL, '2020-04-18 23:35:10', '2020-04-18 23:35:10'),
(2, 5, 'New York', 'NY', '123456', '180', '61', '30', '30', '38', '8', '14', 'null', '2020-04-18 23:40:39', '2020-04-18 23:40:54'),
(4, 7, 'Miami', 'FL', '123456', '145', '45', '20', '28', '25', '10', '12', NULL, '2020-04-18 23:55:36', '2020-04-18 23:55:36'),
(5, 8, 'Conyers', 'CO', '123456', '170', '55', '32', '37', '36', '12', '18', NULL, '2020-04-19 00:08:50', '2020-04-19 00:08:50');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_follow_up_date` date DEFAULT NULL,
  `next_follow_up_date` date DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`id`, `name`, `email`, `phone`, `gender`, `remark`, `last_follow_up_date`, `next_follow_up_date`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'jesh lura', 'jesh.lura@example.com', '+1 213 621 0002', 'female', 'I want to know about best time of gym exercise.', '2020-04-18', '2020-04-30', 2, '2020-04-18 06:40:58', '2020-04-18 06:40:58'),
(2, 'Alexandra', 'alexandra@eample.com', '+1 914 232 9901', 'male', NULL, '2020-04-18', '2020-04-30', 3, '2020-04-18 06:57:15', '2020-04-18 06:57:15');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry_follow_up`
--

CREATE TABLE `enquiry_follow_up` (
  `id` int(10) UNSIGNED NOT NULL,
  `enquiry_id` int(11) NOT NULL,
  `next_date` date NOT NULL,
  `remark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `expense`
--

CREATE TABLE `expense` (
  `id` int(10) UNSIGNED NOT NULL,
  `item_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `purchase_date` date NOT NULL,
  `bill_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bill_photo` text COLLATE utf8mb4_unicode_ci,
  `price` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `expense`
--

INSERT INTO `expense` (`id`, `item_name`, `purchase_date`, `bill_no`, `bill_photo`, `price`, `created_at`, `updated_at`) VALUES
(1, 'Metal Shaker', '2020-04-08', 'A230089', NULL, 10, '2020-04-18 07:01:57', '2020-04-18 07:01:57'),
(2, 'Treadmill with Auto Lubrication & Auto Inclination', '2019-10-14', 'A2300856', NULL, 1000, '2020-04-18 07:08:52', '2020-04-18 07:08:52');

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` int(10) UNSIGNED NOT NULL,
  `bill_to` int(11) NOT NULL,
  `customer_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invoice_date` date NOT NULL,
  `subtotal` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `tax` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `bill_to`, `customer_email`, `customer_address`, `customer_phone`, `invoice_date`, `subtotal`, `discount`, `tax`, `total`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 4, 'mark@example.com', '104 South 53rd St, Tampa', '1234567890', '2020-04-19', 100, 0, 0, 100, 3, '2020-04-19 00:39:41', '2020-04-19 00:39:41'),
(2, 7, 'niti@example.com', '4 Cambridge Rd', '1234567890', '2020-04-19', 500, 0, 0, 500, 2, '2020-04-19 00:46:18', '2020-04-19 00:46:18'),
(3, 5, 'hennry@example.com', '531 Hall Ave. New Rochelle', '123456789', '2020-04-19', 200, 0, 0, 200, 3, '2020-04-19 00:51:05', '2020-04-19 00:51:05');

-- --------------------------------------------------------

--
-- Table structure for table `invoice_item`
--

CREATE TABLE `invoice_item` (
  `id` int(10) UNSIGNED NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `rate` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invoice_item`
--

INSERT INTO `invoice_item` (`id`, `invoice_id`, `name`, `quantity`, `rate`, `amount`, `created_at`, `updated_at`) VALUES
(1, 1, 'Basic Package', 1, 100, 100, '2020-04-19 00:39:41', '2020-04-19 00:39:41'),
(2, 2, 'Premium Package', 1, 500, 500, '2020-04-19 00:46:18', '2020-04-19 00:46:18'),
(3, 3, 'Standard Package', 1, 200, 200, '2020-04-19 00:51:05', '2020-04-19 00:51:05');

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
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_12_21_050402_create_permission_tables', 1),
(9, '2019_12_28_053240_create_branch_table', 1),
(10, '2019_12_28_055237_create_enquiry_table', 1),
(11, '2019_12_28_055542_create_enquiry_follow_up_table', 1),
(12, '2019_12_28_055753_create_expense_table', 1),
(13, '2019_12_28_060417_create_invoice_table', 1),
(14, '2019_12_28_060830_create_invoice_item_table', 1),
(15, '2019_12_28_061146_create_notice_table', 1),
(16, '2019_12_28_061348_create_package_table', 1),
(17, '2019_12_28_061702_create_payment_table', 1),
(18, '2019_12_28_061903_create_product_table', 1),
(19, '2019_12_28_062043_create_product_sell_table', 1),
(20, '2019_12_28_062303_create_subscription_table', 1),
(21, '2020_04_15_170610_create_attendance_table', 1),
(22, '2020_04_15_170758_create_currency_table', 1),
(23, '2020_04_15_170938_create_customer_table', 1),
(24, '2020_04_15_172226_create_settings_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notice`
--

CREATE TABLE `notice` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` int(11) NOT NULL,
  `from_id` int(11) NOT NULL,
  `detail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notice`
--

INSERT INTO `notice` (`id`, `title`, `role_id`, `from_id`, `detail`, `created_at`, `updated_at`) VALUES
(1, 'Time issue', 3, 1, 'Hello dear staff member please be on time. maximum 5 minutes late allowed.', '2020-04-19 00:12:48', '2020-04-19 00:12:48'),
(2, 'Care for staff', 2, 1, 'Hello dear managers, please take care of our staff members and give them freedom how they want to work.', '2020-04-19 00:52:19', '2020-04-19 00:52:19');

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
('267a6390e545baa615640ada79a56f6d3c270d2a793231e4c72cb27dca8a693283ad951dc3a5317f', 1, 2, NULL, '["*"]', 0, '2020-04-17 07:36:15', '2020-04-17 07:36:15', '2021-04-17 13:06:15'),
('4e3e4cb06b0c574d5df01f9a7f8f6ff95867889135c74bd384437513920be2e529b30b411fe61826', 1, 2, NULL, '["*"]', 0, '2020-05-13 05:22:33', '2020-05-13 05:22:33', '2021-05-13 10:52:33'),
('517de54a198eb4907d270d680297a137af528db80159b03cf740a38d288a5753b3661ab21291b12c', 1, 2, NULL, '["*"]', 0, '2020-04-17 10:44:21', '2020-04-17 10:44:21', '2021-04-17 16:14:21'),
('5c6f543bc5e9ccec06f01144ea86c9a94fe7b561f5be3617df4696c32a0cc770e38de5e101b68920', 1, 2, NULL, '["*"]', 0, '2020-04-20 07:56:42', '2020-04-20 07:56:42', '2021-04-20 13:26:42'),
('8d5eefba973748881dbc7b90371afa39c5f6bba6efecbe86793d5d12908a09400b277eea74834fcc', 1, 2, NULL, '["*"]', 0, '2020-04-17 10:44:22', '2020-04-17 10:44:22', '2021-04-17 16:14:22'),
('a070cbf53c8e9a69528943ef99f416945687a80058108dd19322c9f55788b347762124d15485d2d3', 1, 2, NULL, '["*"]', 0, '2020-05-13 05:22:35', '2020-05-13 05:22:35', '2021-05-13 10:52:35'),
('b87fe9c34ad1a61e261c7403e6c93db83573a1f86f97cd42a73b3cf1c08e8ed195c4f9bf5e35e799', 1, 2, NULL, '["*"]', 0, '2020-04-18 06:06:04', '2020-04-18 06:06:04', '2021-04-18 11:36:04'),
('b8d9c75b089bba3b319331d36130e024a7c897f61a08a6998c8196160822e696cfdc8b2a0b605a6b', 1, 2, NULL, '["*"]', 0, '2020-04-18 05:17:30', '2020-04-18 05:17:30', '2021-04-18 10:47:30'),
('bc09109a51f7eff35495af4d5c0f01f8f4d912de4ad42c9f5d6e0385ae96bca5e3c60c22b8e9de24', 1, 2, NULL, '["*"]', 0, '2020-04-17 07:37:40', '2020-04-17 07:37:40', '2021-04-17 13:07:40'),
('bc436a7a6327d9c61de9d97a29a45ab5275e7f210858095cf21b69ed294e5e2cee8ee6e8bfc1ca25', 1, 2, NULL, '["*"]', 0, '2020-05-13 05:25:57', '2020-05-13 05:25:57', '2021-05-13 10:55:57'),
('c8ad1df143e0c9cd7d903442a569bc70e9e80a7ba8e4c8c152d98640ac78d056e17d438e917355de', 1, 2, NULL, '["*"]', 0, '2020-04-20 07:56:43', '2020-04-20 07:56:43', '2021-04-20 13:26:43');

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
(1, NULL, 'Laravel Personal Access Client', 'euMlDeEFSwG7vBfNge3xDTX4d8yMOEa6bsnOhCfI', 'http://localhost', 1, 0, 0, '2020-04-17 07:30:28', '2020-04-17 07:30:28'),
(2, NULL, 'Laravel Password Grant Client', 'kmLSoeb7zUs9lKVoE61ITZovc5ayh1cshdnlhgNH', 'http://localhost', 0, 1, 0, '2020-04-17 07:30:28', '2020-04-17 07:30:28');

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

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2020-04-17 07:30:28', '2020-04-17 07:30:28');

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
('073d5aac0b58a10ca0eec798e86bf3a870fbee967bb4920c0ce3a26cfe3c2c5df5a9f9c8873c5395', 'b87fe9c34ad1a61e261c7403e6c93db83573a1f86f97cd42a73b3cf1c08e8ed195c4f9bf5e35e799', 0, '2021-04-18 11:36:04'),
('1e841e73494cbde66482f61c139391b8264a44e89dfe0460969424973a131c121303885ccb2543f2', '8d5eefba973748881dbc7b90371afa39c5f6bba6efecbe86793d5d12908a09400b277eea74834fcc', 0, '2021-04-17 16:14:22'),
('3cf3d6c0f6fee1c5b9b72a61da0abcd8b666f123ad32d1fbb27f67d042f764a66b589b024dbb5d39', 'b8d9c75b089bba3b319331d36130e024a7c897f61a08a6998c8196160822e696cfdc8b2a0b605a6b', 0, '2021-04-18 10:47:30'),
('956e854aae434d18f8410c5532a7e73ad3698059e64adf507671d8930f06cc721419d155b7de3148', 'c8ad1df143e0c9cd7d903442a569bc70e9e80a7ba8e4c8c152d98640ac78d056e17d438e917355de', 0, '2021-04-20 13:26:43'),
('a185065c8c380eb5a7d7a566e9191bf744746b68555f565aec42429baf0ab073bde1ced3dbbe34b2', 'bc09109a51f7eff35495af4d5c0f01f8f4d912de4ad42c9f5d6e0385ae96bca5e3c60c22b8e9de24', 0, '2021-04-17 13:07:40'),
('c48076f9e3ab894133c152784af62e449c53affb4abef65e2fcb1bde758e38d44c5a988aa8c172b5', '267a6390e545baa615640ada79a56f6d3c270d2a793231e4c72cb27dca8a693283ad951dc3a5317f', 0, '2021-04-17 13:06:15'),
('c53380a98ed9b00f03cf24b277c98307bd214620c0f7e2c1c92705649a7c7520580eb002038b3aac', 'a070cbf53c8e9a69528943ef99f416945687a80058108dd19322c9f55788b347762124d15485d2d3', 0, '2021-05-13 10:52:35'),
('e4575cb7951b7f166eccda4b577163c582caf47c3cb975f16d7b2a3e51b9b123c19279bddf2968be', '5c6f543bc5e9ccec06f01144ea86c9a94fe7b561f5be3617df4696c32a0cc770e38de5e101b68920', 0, '2021-04-20 13:26:43'),
('e7d24dbc5ad2f7fde89375325bf296d3813fae951a6e23831eaa0bc4cf94d42d133783007acec796', 'bc436a7a6327d9c61de9d97a29a45ab5275e7f210858095cf21b69ed294e5e2cee8ee6e8bfc1ca25', 0, '2021-05-13 10:55:57'),
('f313ba39efd55c30f324d8585e7a050e292201beaca5e6f6ebfc3157b956ccbacd734b60dfd5433f', '517de54a198eb4907d270d680297a137af528db80159b03cf740a38d288a5753b3661ab21291b12c', 0, '2021-04-17 16:14:21'),
('f9ea6f3ae2595dfefaec538c3d9e15904494195fc54fa42f8a6a3e901fe09b3b53f5ff9a8409286d', '4e3e4cb06b0c574d5df01f9a7f8f6ff95867889135c74bd384437513920be2e529b30b411fe61826', 0, '2021-05-13 10:52:34');

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `detail` text COLLATE utf8mb4_unicode_ci,
  `image` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`id`, `name`, `price`, `duration`, `detail`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Basic Package', 100, 3, 'Basic Gym Exercise', '/package/mYP2h6tfZiNWjZt8jzoKGeaoV4EY3QZN.svg', '2020-04-18 05:38:27', '2020-04-18 05:38:27'),
(2, 'Standard Package', 200, 6, 'Standard Gym Exercise', '/package/seOhWJAPJOgS8yzyjQwwy5pEhTjXstii.jpg', '2020-04-18 05:42:06', '2020-04-18 05:42:06'),
(3, 'Premium Package', 500, 12, 'Premium Gym Package', '/package/FJJRw8bmdWWl51jDWUj7I9qQA88tMOWQ.jpg', '2020-04-18 05:48:29', '2020-04-18 05:48:29');

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
  `id` int(10) UNSIGNED NOT NULL,
  `staff_member_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subscription_id` int(11) NOT NULL,
  `paid_amount` int(11) NOT NULL,
  `remaining_amount` int(11) NOT NULL,
  `payment_source` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `staff_member_name`, `subscription_id`, `paid_amount`, `remaining_amount`, `payment_source`, `remark`, `created_at`, `updated_at`) VALUES
(1, 'admin admin', 1, 20, 80, 'cash', NULL, '2020-04-19 00:39:30', '2020-04-19 00:39:30'),
(2, 'admin admin', 3, 120, 380, 'credit_card', NULL, '2020-04-19 00:46:08', '2020-04-19 00:46:08'),
(3, 'admin admin', 3, 20, 360, 'net_banking', NULL, '2020-04-19 00:50:42', '2020-04-19 00:50:42'),
(4, 'admin admin', 2, 10, 190, 'cash', NULL, '2020-04-19 00:50:57', '2020-04-19 00:50:57');

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

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'add__package', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(2, 'update__package', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(3, 'view__package', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(4, 'delete__package', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(5, 'add__product', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(6, 'update__product', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(7, 'view__product', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(8, 'delete__product', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(9, 'add__product_sell', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(10, 'update__product_sell', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(11, 'view__product_sell', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(12, 'delete__product_sell', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(13, 'add__staff_member', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(14, 'update__staff_member', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(15, 'view__staff_member', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(16, 'delete__staff_member', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(17, 'add__payment', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(18, 'update__payment', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(19, 'view__payment', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(20, 'delete__payment', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(21, 'add__enquiry', 'web', '2020-04-17 07:31:01', '2020-04-17 07:31:01'),
(22, 'update__enquiry', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(23, 'view__enquiry', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(24, 'delete__enquiry', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(25, 'add__customer', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(26, 'update__customer', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(27, 'view__customer', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(28, 'delete__customer', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(29, 'add__subscription', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(30, 'update__subscription', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(31, 'view__subscription', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(32, 'delete__subscription', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(33, 'add__notice', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(34, 'update__notice', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(35, 'view__notice', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(36, 'delete__notice', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(37, 'add__expense', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(38, 'update__expense', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(39, 'view__expense', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(40, 'delete__expense', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(41, 'add__invoice', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(42, 'update__invoice', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(43, 'view__invoice', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(44, 'delete__invoice', 'web', '2020-04-17 07:31:02', '2020-04-17 07:31:02'),
(45, 'view__attendance', 'web', '2020-04-17 07:31:03', '2020-04-17 07:31:03'),
(46, 'add__attendance', 'web', '2020-04-17 07:31:03', '2020-04-17 07:31:03'),
(47, 'update__attendance', 'web', '2020-04-17 07:31:03', '2020-04-17 07:31:03'),
(48, 'delete__attendance', 'web', '2020-04-17 07:31:03', '2020-04-17 07:31:03'),
(49, 'permission_manage', 'web', '2020-04-17 07:31:03', '2020-04-17 07:31:03');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `detail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `quantity`, `detail`, `created_at`, `updated_at`) VALUES
(1, 'Metal Shaker', 20, 1, 'The perfect alternative to plastic shakers — lump-free shakes every time', '2020-04-18 05:56:26', '2020-04-18 05:56:26'),
(2, 'Brazil nuts', 50, 1, 'All nuts are packed with vitamins, minerals and fibre, but Brazil nuts are also one of the few good sources of selenium', '2020-04-18 05:58:59', '2020-04-18 05:58:59'),
(3, 'Padded Lifting Straps', 50, 2, 'For a more secure grip when lifting heavy', '2020-04-18 06:08:48', '2020-04-18 06:08:57'),
(4, 'Ankle Knee Palm and Elbow Support Combo (Pair)', 50, 2, 'Ankle Knee Palm and Elbow Support Combo (Pair)', '2020-04-18 06:11:23', '2020-04-18 06:11:23'),
(5, 'Protein Brownie', 50, 6, 'Everyday protein-packed treat — ideal for on-the-go snacking', '2020-04-18 06:14:28', '2020-04-18 06:14:28');

-- --------------------------------------------------------

--
-- Table structure for table `product_sell`
--

CREATE TABLE `product_sell` (
  `id` int(10) UNSIGNED NOT NULL,
  `staff_member_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `paid_amount` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(1, 'super_admin', 'web', '2020-04-17 07:31:03', '2020-04-17 07:31:03'),
(2, 'manager', 'web', '2020-04-17 07:31:04', '2020-04-17 07:31:04'),
(3, 'staff', 'web', '2020-04-17 07:31:05', '2020-04-17 07:31:05'),
(4, 'customer', 'web', '2020-04-17 07:31:06', '2020-04-17 07:31:06');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(36, 1),
(37, 1),
(38, 1),
(39, 1),
(40, 1),
(41, 1),
(42, 1),
(43, 1),
(44, 1),
(45, 1),
(46, 1),
(47, 1),
(48, 1),
(49, 1),
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(5, 2),
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(10, 2),
(11, 2),
(13, 2),
(15, 2),
(17, 2),
(18, 2),
(19, 2),
(21, 2),
(22, 2),
(23, 2),
(24, 2),
(25, 2),
(26, 2),
(27, 2),
(29, 2),
(31, 2),
(33, 2),
(35, 2),
(37, 2),
(38, 2),
(39, 2),
(41, 2),
(42, 2),
(43, 2),
(45, 2),
(46, 2),
(47, 2),
(48, 2),
(3, 3),
(5, 3),
(7, 3),
(9, 3),
(10, 3),
(11, 3),
(15, 3),
(17, 3),
(19, 3),
(21, 3),
(22, 3),
(23, 3),
(24, 3),
(25, 3),
(26, 3),
(27, 3),
(29, 3),
(31, 3),
(35, 3),
(41, 3),
(42, 3),
(43, 3),
(45, 3),
(46, 3),
(3, 4),
(7, 4),
(11, 4),
(19, 4),
(31, 4),
(35, 4),
(43, 4),
(45, 4);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `currency_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `footer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `currency_id`, `title`, `logo_url`, `footer`, `created_at`, `updated_at`) VALUES
(1, 1, 'Dirghayu Fitness Factory', '/images/logo.png', 'Copyright © 2020 Dirghayu Fitness Factory. All rights reserved.', '2020-04-17 07:31:07', '2020-04-17 07:31:07');

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE `subscription` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `package_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `trial_days` int(11) NOT NULL DEFAULT '0',
  `remark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscription`
--

INSERT INTO `subscription` (`id`, `user_id`, `package_name`, `amount`, `duration`, `start_date`, `end_date`, `trial_days`, `remark`, `status`, `created_at`, `updated_at`) VALUES
(1, 4, 'Basic Package', 100, 3, '2020-04-29', '2020-07-31', 10, NULL, 1, '2020-04-18 23:51:46', '2020-04-18 23:51:46'),
(2, 5, 'Standard Package', 200, 6, '2020-04-25', '2020-10-31', 5, NULL, 1, '2020-04-18 23:51:59', '2020-04-18 23:51:59'),
(3, 7, 'Premium Package', 500, 12, '2020-04-25', '2021-04-30', 5, NULL, 1, '2020-04-18 23:58:03', '2020-04-18 23:58:03'),
(4, 8, 'Standard Package', 200, 6, '2020-04-28', '2020-10-31', 8, NULL, 1, '2020-04-19 00:08:50', '2020-04-19 00:08:50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dob` date NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo_url` text COLLATE utf8mb4_unicode_ci,
  `is_active` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `remember_token`, `email_verified_at`, `gender`, `dob`, `first_name`, `last_name`, `phone`, `address`, `photo_url`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'admin@example.com', '$2y$10$EMzOkXgzIpIbHh2dxPQxGuDeYw2cw1S/bTDZ/dEx.uN3/Vid9LIHC', NULL, NULL, 'male', '2020-04-01', 'admin', 'admin', '+14844732454', '1271 23rd St, Cameron, WI, 54822', '/profile/user5.png', 1, '2020-04-17 07:31:07', '2020-05-13 05:26:08'),
(2, 'ajit.apurva@example.com', '$2y$10$SiQ4NOz16GNHU5R.x66e0OZt3B0p3EclKQHrJk1rNTupHzYuVpGhG', NULL, NULL, 'female', '2018-02-06', 'Ajit', 'Apurva', '+1 800 444 4444', '24 E. La Sierra St.\nMuskego, WI 53150', '/profile/0DfrBfLZzAnNYqoVNABr7iwsHRlAD3CN.png', 1, '2020-04-18 06:19:09', '2020-04-18 06:19:09'),
(3, 'mark.polo@example.com', '$2y$10$0eRmFz.oOCnmshwwDZ.XvOKuM9Imw5nBliXEAetrrTo0q9Nih9Vfu', NULL, NULL, 'female', '2020-04-12', 'mark', 'polo', '+1 202 762 1401', '229 Silver Spear Street\nLittleton, CO 80123', '/profile/PVQSfkQVRzCzPUJK8fzb0LGuchlWYAsn.png', 1, '2020-04-18 06:32:40', '2020-04-18 06:32:40'),
(4, 'mark@example.com', '$2y$10$K4ZUKkYficodaGgiVSTkq.u5JaTWqilJEbHUjbBtRRFDSM9Jmpf5G', NULL, NULL, 'male', '2012-03-14', 'Mark', 'Patel', '1234567890', '104 South 53rd St, Tampa', '/profile/u4qqCIt18oAscaU8pxdVCz5TVc2BQkz4.png', 1, '2020-04-18 23:35:10', '2020-04-18 23:35:10'),
(5, 'hennry@example.com', '$2y$10$t6kJ4TSuYgGJLt/ejfwyHOteWD.UGvA8O6D5tn6/YjpEzRAID.sfC', NULL, NULL, 'female', '2010-04-13', 'Hennry', 'Martin', '123456789', '531 Hall Ave. New Rochelle', '/profile/SRgyX4MnM3O9QTrUbVgKj6xO5bjMudMe.png', 1, '2020-04-18 23:40:39', '2020-04-18 23:41:14'),
(7, 'niti@example.com', '$2y$10$iIH8BHsBqzghXWkagKBGmefZaJIn1kXiXzyanf19qicRoih7hhwEK', NULL, NULL, 'female', '2013-04-10', 'niti', 'koop', '1234567890', '4 Cambridge Rd', '/profile/lxu2OnULEY1TjwTRavQ7PujYhLmRtKIN.png', 1, '2020-04-18 23:55:36', '2020-04-18 23:55:36'),
(8, 'mike@example.com', '$2y$10$0dwFf6Nd8rxkZuZEFyPQTe4KPZk12057i4WMzNseVMXpN/mhiX8Ea', NULL, NULL, 'male', '2010-04-06', 'Mike', 'Hussie', '1234567890', '8091 Pearl Road', '/profile/TuZUE2mTSrGBTQl94f3JcNuVWl7MZMf6.png', 1, '2020-04-19 00:08:49', '2020-04-19 00:08:49');

-- --------------------------------------------------------

--
-- Table structure for table `user_has_permissions`
--

CREATE TABLE `user_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_has_roles`
--

CREATE TABLE `user_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_has_roles`
--

INSERT INTO `user_has_roles` (`role_id`, `model_type`, `user_id`) VALUES
(1, 'App\\User', 1),
(2, 'App\\User', 2),
(3, 'App\\User', 3),
(4, 'App\\User', 4),
(4, 'App\\User', 5),
(4, 'App\\User', 6),
(4, 'App\\User', 7),
(4, 'App\\User', 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `currency`
--
ALTER TABLE `currency`
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
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscription`
--
ALTER TABLE `subscription`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_has_permissions`
--
ALTER TABLE `user_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`user_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`user_id`,`model_type`);

--
-- Indexes for table `user_has_roles`
--
ALTER TABLE `user_has_roles`
  ADD PRIMARY KEY (`role_id`,`user_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`user_id`,`model_type`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `currency`
--
ALTER TABLE `currency`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `enquiry_follow_up`
--
ALTER TABLE `enquiry_follow_up`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `expense`
--
ALTER TABLE `expense`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `invoice_item`
--
ALTER TABLE `invoice_item`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `notice`
--
ALTER TABLE `notice`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `package`
--
ALTER TABLE `package`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `product_sell`
--
ALTER TABLE `product_sell`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `subscription`
--
ALTER TABLE `subscription`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_has_permissions`
--
ALTER TABLE `user_has_permissions`
  ADD CONSTRAINT `user_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_has_roles`
--
ALTER TABLE `user_has_roles`
  ADD CONSTRAINT `user_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
