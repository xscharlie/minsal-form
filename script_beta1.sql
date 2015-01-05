SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

CREATE SCHEMA IF NOT EXISTS `minsaldb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `minsaldb` ;

-- -----------------------------------------------------
-- Table `minsaldb`.`datosServicio`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `minsaldb`.`datosServicio` (
  `idform` INT NOT NULL ,
  `fecha` DATE NULL ,
  `codambulancia` VARCHAR(45) NULL ,
  `cronologia_e` TINYINT(1) NULL ,
  `cronologia_el` TINYINT(1) NULL ,
  `cronologia_ea` TINYINT(1) NULL ,
  `cronologia_ec` TINYINT(1) NULL ,
  `cronologia_ee` TINYINT(1) NULL ,
  `cronologia_ed` TINYINT(1) NULL ,
  `cronologia_d` TINYINT(1) NULL ,
  `motivoatencion` VARCHAR(45) NULL ,
  `direccionasistencia` VARCHAR(255) NULL ,
  `lugarocurrencia` VARCHAR(45) NULL ,
  PRIMARY KEY (`idform`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `minsaldb`.`paciente`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `minsaldb`.`paciente` (
  `idform` INT NOT NULL ,
  `nombre` VARCHAR(255) NULL ,
  `sexo` VARCHAR(1) NULL ,
  `edad` INT NULL ,
  `domicilio` VARCHAR(255) NULL ,
  `telefono` VARCHAR(45) NULL ,
  `ocupacion` VARCHAR(255) NULL ,
  PRIMARY KEY (`idform`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `minsaldb`.`causatraumatica`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `minsaldb`.`causatraumatica` (
  `idform` INT NOT NULL ,
  `causadapor` VARCHAR(45) NULL ,
  `accidenteautomovil` TINYINT(1) NULL ,
  `volcadura_colision` VARCHAR(45) NULL ,
  `contraobjeto` VARCHAR(45) NULL ,
  `impacto` VARCHAR(45) NULL ,
  `hundimiento` INT NULL ,
  `parabrisas` VARCHAR(45) NULL ,
  `volante` VARCHAR(45) NULL ,
  `bolsadeaire` TINYINT(1) NULL ,
  `cituron` VARCHAR(45) NULL ,
  `casco` TINYINT(1) NULL ,
  `dentrodelvehiculo` VARCHAR(45) NULL ,
  `atropellado` VARCHAR(45) NULL ,
  PRIMARY KEY (`idform`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `minsaldb`.`causaclinica`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `minsaldb`.`causaclinica` (
  `idform` INT NOT NULL ,
  `origenprobable` VARCHAR(45) NULL ,
  `especifique` VARCHAR(255) NULL ,
  `primeravez` TINYINT(1) NULL ,
  `subsecuente` TINYINT(1) NULL ,
  PRIMARY KEY (`idform`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `minsaldb`.`parto`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `minsaldb`.`parto` (
  `idform` INT NOT NULL ,
  `gravidez` TINYINT(1) NULL ,
  `para` TINYINT(1) NULL ,
  `abortos` TINYINT(1) NULL ,
  `cesarea` TINYINT(1) NULL ,
  `seman_meses_gestacion` VARCHAR(45) NULL ,
  `fechaprobparto` DATE NULL ,
  `salidaliqtransvag` TINYINT(1) NULL ,
  `rupturamembranas` TINYINT(1) NULL ,
  `dilat_cerv` TINYINT(1) NULL ,
  `inicio_contracc` VARCHAR(45) NULL ,
  `frecuencia` VARCHAR(45) NULL ,
  `duracion` VARCHAR(45) NULL ,
  `frec_cardiaca_fetal` VARCHAR(45) NULL ,
  `riesgomaterno` VARCHAR(45) NULL ,
  `horanacimiento` VARCHAR(45) NULL ,
  `lugarocurrencia` VARCHAR(255) NULL ,
  `placentaexpulsada` TINYINT(1) NULL ,
  `placentacompleta` TINYINT(1) NULL ,
  `placentaincompleta` TINYINT(1) NULL ,
  `producto_vivo_muerto` VARCHAR(45) NULL ,
  `producto_sexo` VARCHAR(45) NULL ,
  `apgar` VARCHAR(45) NULL ,
  `reanimacion` TINYINT(1) NULL ,
  `tiempodereanimacion` INT NULL ,
  PRIMARY KEY (`idform`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `minsaldb`.`evaluacioninicial`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `minsaldb`.`evaluacioninicial` (
  `idform` INT NOT NULL ,
  `nivel_conciencia` VARCHAR(100) NULL ,
  `via_aerea` VARCHAR(45) NULL ,
  `patron_respiratorio` VARCHAR(45) NULL ,
  `auscultacion` VARCHAR(45) NULL ,
  `pulsos` VARCHAR(45) NULL ,
  `calidad` VARCHAR(45) NULL ,
  `piel` VARCHAR(45) NULL ,
  `caracteristicas` VARCHAR(45) NULL ,
  PRIMARY KEY (`idform`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `minsaldb`.`evaluacionfisica`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `minsaldb`.`evaluacionfisica` (
  `idform` INT NOT NULL ,
  `area_f1` VARCHAR(45) NULL ,
  `area_f2` VARCHAR(45) NULL ,
  `area_f3` VARCHAR(45) NULL ,
  `area_f4` VARCHAR(45) NULL ,
  `area_f5` VARCHAR(45) NULL ,
  `area_f6` VARCHAR(45) NULL ,
  `area_p1` VARCHAR(45) NULL ,
  `area_p2` VARCHAR(45) NULL ,
  `area_p3` VARCHAR(45) NULL ,
  `area_p4` VARCHAR(45) NULL ,
  `area_p5` VARCHAR(45) NULL ,
  `area_p6` VARCHAR(45) NULL ,
  `tipolesion` VARCHAR(255) NULL ,
  `pulpilas` VARCHAR(255) NULL ,
  PRIMARY KEY (`idform`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `minsaldb`.`monitoreo`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `minsaldb`.`monitoreo` (
  `idform` INT NOT NULL ,
  `hora` DATE NOT NULL ,
  `fr` VARCHAR(45) NULL ,
  `fc` VARCHAR(45) NULL ,
  `ta` VARCHAR(45) NULL ,
  `sat02` VARCHAR(45) NULL ,
  `temp` VARCHAR(45) NULL ,
  `miniexamen_neuro` VARCHAR(45) NULL ,
  `evalucion_inicial` VARCHAR(45) NULL ,
  PRIMARY KEY (`idform`, `hora`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `minsaldb`.`historia`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `minsaldb`.`historia` (
  `idform` INT NOT NULL ,
  `alergias` VARCHAR(45) NULL ,
  `medicamentos` VARCHAR(45) NULL ,
  `patologia_previas` VARCHAR(45) NULL ,
  `adicciones` VARCHAR(255) NULL ,
  PRIMARY KEY (`idform`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `minsaldb`.`tratamiento`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `minsaldb`.`tratamiento` (
  `idform` INT NOT NULL ,
  `via_aerea` VARCHAR(45) NULL ,
  `control_cervical` VARCHAR(45) NULL ,
  `asistencia_ventilatoria` VARCHAR(45) NULL ,
  `frecuencia_ventilador` VARCHAR(45) NULL ,
  `volumen_ventilador` VARCHAR(45) NULL ,
  `fio2_ventilador` VARCHAR(45) NULL ,
  `oxigenoterapia` VARCHAR(45) NULL ,
  `control_hemorragia_viavenosa` VARCHAR(45) NULL ,
  `tiposolucion` VARCHAR(45) NULL ,
  `cantidad` VARCHAR(45) NULL ,
  `infusion` VARCHAR(45) NULL ,
  PRIMARY KEY (`idform`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `minsaldb`.`tratamiento_farm_electric`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `minsaldb`.`tratamiento_farm_electric` (
  `idform` INT NOT NULL ,
  `hora` VARCHAR(45) NOT NULL ,
  `medicamento` VARCHAR(45) NULL ,
  `dosis` VARCHAR(45) NULL ,
  `via_admon` VARCHAR(45) NULL ,
  `terapia_electrica` VARCHAR(45) NULL ,
  `rcp_basica` TINYINT(1) NULL ,
  `rcp_avanzada` TINYINT(1) NULL ,
  `inmov_extremidades` TINYINT(1) NULL ,
  `empaquetamiento` TINYINT(1) NULL ,
  `curacion` TINYINT(1) NULL ,
  `vendaje` TINYINT(1) NULL ,
  PRIMARY KEY (`idform`, `hora`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `minsaldb`.`consumo_basico`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `minsaldb`.`consumo_basico` (
  `idform` INT NOT NULL ,
  `sonda_aspiracion` INT NULL ,
  `canulas_nasales` INT NULL ,
  `mascarilla_adulto` INT NULL ,
  `venocath14` INT NULL ,
  `venocath16` INT NULL ,
  `venocath18` INT NULL ,
  `jeringas5cc` INT NULL ,
  `bajalenguas` INT NULL ,
  `guantes` INT NULL ,
  `tela_adhesiva` INT NULL ,
  `venda_elastica` INT NULL ,
  `lanceta` INT NULL ,
  `curitas` INT NULL ,
  `gasa_simple` INT NULL ,
  `algodon` INT NULL ,
  `sabana` INT NULL ,
  `venda_gasa10cm` INT NULL ,
  `compresa_esteril` INT NULL ,
  `collar_cervical` INT NULL ,
  `otros` INT NULL ,
  PRIMARY KEY (`idform`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `minsaldb`.`form`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `minsaldb`.`form` (
  `idform` INT NOT NULL ,
  `fecha` TIMESTAMP NULL ,
  PRIMARY KEY (`idform`) )
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
