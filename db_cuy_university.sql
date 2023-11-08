/*
 Navicat Premium Data Transfer

 Source Server         : db_cuy_university
 Source Server Type    : MySQL
 Source Server Version : 100131
 Source Host           : localhost:3306
 Source Schema         : db_cuy_university

 Target Server Type    : MySQL
 Target Server Version : 100131
 File Encoding         : 65001

 Date: 08/11/2023 20:06:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for mahasiswa
-- ----------------------------
DROP TABLE IF EXISTS `mahasiswa`;
CREATE TABLE `mahasiswa`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nim` int NULL DEFAULT NULL,
  `fullname` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `grade` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `address` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `idx`(`nim`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of mahasiswa
-- ----------------------------
INSERT INTO `mahasiswa` VALUES (1, 101, 'Fahmi ardiansyah', '1if1', 'Jl. Bojongkidul');
INSERT INTO `mahasiswa` VALUES (2, 102, 'Rehan ardiansyah', '1if2', 'Jl. Bojongkidul');
INSERT INTO `mahasiswa` VALUES (3, 103, 'John Lenon', '1if3', 'Jl. Banjarsari');
INSERT INTO `mahasiswa` VALUES (10, 105, 'John Lenon Mahmud', 'lif2', 'Jl Jembatan 5');
INSERT INTO `mahasiswa` VALUES (14, 106, 'John Lenon Mahmud', 'lif2', 'Jl Jembatan 5');
INSERT INTO `mahasiswa` VALUES (15, 107, 'John Lenon Mahmud', 'lif2', 'Jl Jembatan 5');

SET FOREIGN_KEY_CHECKS = 1;
