
# E04-2: System control 


## Initialize your main script

If we do not create a R package, the following workflow of parsing files containing function(s) and creating global variables for the script control will simplify your life. All we need is a bit structure to set up a project (or assignments). Basically we need to:

 1.  define a working directory
 2.  write some useful functions like below
 3.  source the function folder to get hold of them
 4.  write the main script

Assuming we already have a project and script folder to source it may look like the following snippet.

	
	
	### START snippet head of main script
	
	# define your github personal folder as project root directory
	filepath_git<-"~/lehre/msc/active/msc-2016/myGithubName/"
	
	# source the setPathGlobal function assumed to be in an already existing "fun" folder
	source('~/lehre/msc/active/msc-2016/myGithubName/fun/setPathGlobal.R')
	
	# call the setPathGlobal function
	setPathGlobal(filepath_git)
	
	# you can source all existing functions
	# first generate a list of all files you want to source
	sourceFileNames <- list.files(pattern="[.]R$", path=paste0(filepath_git,"/fun"), full.names=TRUE)
	
	# source them all
	sapply(sourceFileNames, FUN=source)
	
	# now we can write our main or control script
	### END snippet head of main script
	


The functions below will provide you some basic support to deal with the inconvenience of the ''SAGA ClI''



## Create MOC folder structure

Please use the simple functin ''createMocFolders'' to create a consistent folder structure.

	
	# rs-ws-05-1
	#' @description  MOC - Advanced GIS (T. Nauss, C. Reudenbach)
	#' createMocFolders
	#'@return
	#' defines and creates (if necessary) all folders variables
	#' set the SAGA path variables and other system variables
	#' exports all variables to the global environment
	#'
	#'@param filepath_git  project github root directory (your github name)
	#'@param csess= current session "01",
	#'@param ccourse current course options are "gi", "rs", "da"
	#'@param moc=TRUE creates a folder structure according to the needs of the MOC courses, FALSE creates a simple project structure
	#'\preformatted{
	#'   If moc=TRUE the following folderstructure is exported. If folders do not exist thesy will be created.
	#'.
	#'├── data
	#'│   ├── data_analysis
	#'│   │   ├── csv
	#'│   │   └── raw
	#'│   ├── gis
	#'│   │   ├── input
	#'│   │   ├── output
	#'│   │   ├── RData
	#'│   │   ├── run
	#'│   │   └── temp
	#'│   └── remote_sensing
	#'│       ├── aerial
	#'│       ├── aerial_croped
	#'│       ├── aerial_merged
	#'│       ├── input
	#'│       ├── RData
	#'│       ├── run
	#'│       └── temp
	#'└── MOC
	#'    ├── data_analysis
	#'    │   └── da-ws-01
	#'    │       └── rmds
	#'    │       └── scripts
	#'    ├── fun
	#'    ├── gis
	#'    │   └── gi-ws-01
	#'    │       └── rmds
	#'    │       └── scripts
	#'    └── remote_sensing
	#'        └── rs-ws-01
	#'    │       └── rmds
	#'            └── scripts
	#'
	#'
	#' ############
	#'
	#' if moc=FALSE
	#' .
	#' └── project1
	#'     ├── control
	#'     │   └── log
	#'     ├── data
	#'     │   ├── input
	#'     │   └── output
	#'     ├── run
	#'     └── src
	#'         └── fun
	#'   }
	#'
	#'@author Thomas Nauss, Chris Reudenbach
	#'
	#'@return  createMocFolders< creates if necessary the directories and export the corresponding pathes as global variables\cr
	
	createMocFolders<- function(filepath_git,csess=15,ccourse="gi", moc=TRUE) {
	
	  # switch backslash to slash and expand path to full path
	  filepath_git<-gsub("\\\\", "/", path.expand(filepath_git))
	
	  # check  tailing / and if not existing append
	  if (substr(filepath_git,nchar(filepath_git)-1,nchar(filepath_git)) != "/") {
	    filepath_git<-paste0(filepath_git,"/")
	  }
	
	  ### moc = FALSE feel free to adapt
	  default_folders<- c(paste0(filepath_git,"src/"),
	                      paste0(filepath_git,"src/fun/"),
	                      paste0(filepath_git,"data/input/"),
	                      paste0(filepath_git,"data/output/"),
	                      paste0(filepath_git,"control/log/"),
	                      paste0(filepath_git,"run/"))
	
	  ### moc=TRUE
	  # script and function folder for each course session can be adapted
	  session_working_folder<-c("/scripts/", "/rmds/")
	  # currently implemented data folders can be adapted
	  data_working_folder<-list(list("aerial/","aerial_merged/","aerial_croped/","RData/","temp/","run/","input/"),
	                            list("RData/","temp/","run/","input/","output/"),
	                            list("csv/","raw/"))
	
	  if (moc) {
	    # static course structure - better keep the below folders
	    proj_root_git<-c(path.expand(filepath_git))
	    proj_root_data<-paste0(substr(proj_root_git,1,gregexpr(pattern ='/',proj_root_git)[[1]][as.numeric(lengths(gregexpr(pattern ='/',proj_root_git))[[1]]-2)]),"data/")
	    sub_root<-c("remote_sensing/","gis/","data_analysis/")
	    session_ID<-c("rs-ws-","gi-ws-","da-ws-")
	
	    # create sessionstring
	    ns<-1:csess
	    session_number<- sapply(ns, function(ns){
	      if (ns<10) {ns<-paste0("0",ns)}
	      return(ns)
	    })
	
	    # create folder and varibales
	    # function folder for all courses
	    # and the rest
	    if (!file.exists(file.path(paste0(filepath_git,"/fun/")))) {
	      dir.create(file.path(paste0(filepath_git,"/fun/")), recursive = TRUE)
	    }
	    for (i in 1:length(proj_root_git)) {
	      for (j in 1:length(sub_root)) {
	        for (k in 1:length(session_ID)) {
	          for (l in 1:length(session_number)) {
	            for (m in 1:length(session_working_folder)) {
	              if (!file.exists(file.path(paste0(proj_root_git[i],sub_root[j],session_ID[j],session_number[l],session_working_folder[m])))) {
	                dir.create(file.path(paste0(proj_root_git[i],sub_root[j],session_ID[j],session_number[l],session_working_folder[m])), recursive = TRUE)
	              }
	            }
	          }
	        }
	      }
	    }
	
	    # data structure NOTE it is outside the proj_root_git folder
	    for (i in 1:length(proj_root_data)){
	      for (j in 1:length(sub_root)) {
	        for (k in 1:length(data_working_folder[[j]])) {
	          if (ccourse==substr(session_ID[j],1,2) && data_working_folder[[j]][k]=="run/"){
	          }
	          if (!file.exists(file.path(paste0(proj_root_data[i],sub_root[j],data_working_folder[[j]][k])))) {
	            dir.create(file.path(paste0(proj_root_data[i],sub_root[j],data_working_folder[[j]][k])), recursive = TRUE)
	
	          }
	        }
	      }
	    }
	  } # end of moc=TRUE
	  # create a default project structure
	  else {
	    # create directories if needed
	    path_temp<-paste0(filepath_git,"run/")
	    for(folder in default_folders){
	      if (!file.exists(file.path(folder))) {
	        dir.create(file.path(folder), recursive = TRUE)
	      }
	    }
	  }
	}
	


## Function getSessionPathes.R


An easy to use programming environment has to deal with global variables and system settings. As you already have noticed it is cumbersome to generate this structure all the time with copy & paste or similar approaches. We need a straightforward approach to get hold of global variables and system settings. Best thing to do is writing a function that helps out.

The most easiest however the most ugliest way to assign a global variable out of a function is using the ''<<-'' operator. Better you forget it at once because this will result in out of control situations due to the fact that you simply can overwrite any existing variable from any place in your script.

The better way is to use the ''assign'' function. the below script is providing two presets. One is providing the course folder and variable structure the other is generating a simple but effective project structure. Feel free to adapt and improve the below script.


	
	# rs-ws-05-1
	#' @description  MOC - Advanced GIS (T. Nauss, C. Reudenbach)
	#' getSessionPathes
	#'@return
	#' defines and creates (if necessary) all folders variables
	#' set the SAGA path variables and other system variables
	#' exports all variables to the global environment
	#'
	#'@param filepath_git  project github root directory (your github name)
	#'@param csess= current session "01",
	#'@param courseCode current course options are "gi", "rs", "da"
	#'@param moc=TRUE creates a folder structure according to the needs of the MOC courses, FALSE creates a simple project structure
	#'\preformatted{
	#'   If moc=TRUE the following folderstructure is exported. If folders do not exist thesy will be created.
	#'.
	#'├── data
	#'│   ├── data_analysis
	#'│   │   ├── csv
	#'│   │   └── raw
	#'│   ├── gis
	#'│   │   ├── input
	#'│   │   ├── output
	#'│   │   ├── RData
	#'│   │   ├── run
	#'│   │   └── temp
	#'│   └── remote_sensing
	#'│       ├── aerial
	#'│       ├── aerial_croped
	#'│       ├── aerial_merged
	#'│       ├── input
	#'│       ├── RData
	#'│       ├── run
	#'│       └── temp
	#'└── MOC
	#'    ├── data_analysis
	#'    │   └── da-ws-01
	#'    │       └── rmds
	#'    │       └── scripts
	#'    ├── fun
	#'    ├── gis
	#'    │   └── gi-ws-01
	#'    │       └── rmds
	#'    │       └── scripts
	#'    └── remote_sensing
	#'        └── rs-ws-01
	#'    │       └── rmds
	#'            └── scripts
	#'   }
	#'
	#'@author Thomas Nauss, Chris Reudenbach
	#'
	#'@return  getSessionPathes< creates if necessary the directories and export the corresponding pathes as global variables\cr
	
	getSessionPathes<- function(filepath_git,sessNo=1,courseCode="gi") {
	
	  # switch backslash to slash and expand path to full path
	  filepath_git<-gsub("\\\\", "/", path.expand(filepath_git))
	
	  # check  tailing / and if not existing append
	  if (substr(filepath_git,nchar(filepath_git)-1,nchar(filepath_git)) != "/") {
	    filepath_git<-paste0(filepath_git,"/")
	  }
	
	
	  # script and function folder for each course session can be adapted
	  session_working_folder<-c("/scripts/", "/rmds/")
	  # currently implemented data folders can be adapted
	  data_working_folder<-list(list("aerial/","aerial_merged/","aerial_croped/","RData/","temp/","run/","input/"),
	                            list("RData/","temp/","run/","input/","output/"),
	                            list("csv/","raw/"))
	
	
	    # static course structure - better keep the below folders
	    proj_root_git<-c(path.expand(filepath_git))
	    proj_root_data<-paste0(substr(proj_root_git,1,gregexpr(pattern ='/',proj_root_git)[[1]][as.numeric(lengths(gregexpr(pattern ='/',proj_root_git))[[1]]-2)]),"data/")
	
	    if (courseCode == "rs") {
	    sub_root<-c("remote_sensing/")
	    session_ID<-c("rs-ws-")
	    } else if (courseCode == "gi") {
	    sub_root<-c("gis/")
	    session_ID<-c("gi-ws-")
	    } else if  (courseCode == "da") {
	    sub_root<-c("data_analysis/")
	    session_ID<-c("da-ws-")
	    }
	    # create sessionstring
	
	    session_number<- sapply(sessNo, function(no){
	      if (no<10) {no<-paste0("0",no)}
	      return(no)
	    })
	
	    # create folder and varibales
	    # function folder for all courses
	    name<-paste0("pg_fun")
	    value<-paste0(filepath_git,"/fun/")
	    makGlobalVar(name, value)
	    # and the rest
	
	    for (i in 1:length(proj_root_git)) {
	      for (j in 1:length(sub_root)) {
	        for (k in 1:length(session_ID)) {
	          for (l in 1:length(session_number)) {
	            for (m in 1:length(session_working_folder)) {
	              name<-paste0("pg_", substr(session_ID[j],1,2),"_",as.character(gsub("/", "", session_number[l])),"_",as.character(gsub("/", "",session_working_folder[m])))
	              value<- paste0(proj_root_git[i],sub_root[j],session_ID[j],session_number[l],session_working_folder[m])
	               makGlobalVar(name, value)
	              }
	            }
	          }
	        }
	      }
	
	
	    # data structure NOTE it is outside the proj_root_git folder
	    for (i in 1:length(proj_root_data)){
	      for (j in 1:length(sub_root)) {
	        for (k in 1:length(data_working_folder[[j]])) {
	          name<-paste0("pd_",substr(session_ID[j],1,2),"_",as.character(gsub("/", "",data_working_folder[[j]][k])))
	          value<- paste0(proj_root_data[i],sub_root[j],data_working_folder[[j]][k])
	           makGlobalVar(name, value)
	          if (courseCode==substr(session_ID[j],1,2) && data_working_folder[[j]][k]=="run/"){
	            path_temp<- value
	          }
	        }
	      }
	  } # end of moc=TRUE
	
	}
	
	# if NOT existing
	# assigns a variable in .GlobalEnv
	#
	makGlobalVar <- function(name,value) {
	  if(!exists(name, envir = .GlobalEnv)) {
	    assign(name, value, envir = .GlobalEnv, inherits = TRUE)
	  } else {
	    warning(paste0("The variable '", name,"' already exist in .GlobalEnv"))
	  }
	}


## Function sagaModuleHelp

The function ''sagaModuleHelp'' returns the command line help for the addressed module and/or algorithm.


	
	#' sagaModuleHelp
	#'@description gi-ws-04-1 MOC - Advanced GIS (T. Nauss, C. Reudenbach)
	#' get the  command line help for the requested module/algorithm combination using the defined saga_cmd
	#'  Usage: rawCmd<-sagaModuleHelp("name_of_SAGA_module","number_of_algorithm")
	#'  example import gdal raster:  sagaModuleHelp("io_gdal","0")
	#'
	#'@return the help output from the currently linked SAGA binary for the requested module
	#'
	#'@param module name of the saga module
	#'@param algorithm number or name of algorithm
	#'
	
	sagaModuleHelp<- function(module,algorithm=NULL) {
	  options(warn=-1)
	  if (!is.null(algorithm)){
	    info<- system2('saga_cmd',paste(module,algorithm),stderr = TRUE)
	  } else{
	    info<-system2("saga_cmd",paste(module),stderr = TRUE)
	  }
	  options(warn=0)
	  return(info)
	}
	


For example if you want to know how to integrate the ''io_gdal'' module you can do this from R by using the '' sagaModuleHelp'' function as follows.

	
	
	 sagaModuleHelp("io_gdal","0")
	
	
	
	 [1] "Load table: Proj.4-WKT Dictionary..."
	 [2] "failed"
	 [3] "Load table: Proj.4-WKT Dictionary..."
	 [4] "failed"
	 [5] "____________________________"
	 [6] ""
	 [7] "   #####   ##   #####    ##"
	 [8] "  ###     ###  ##       ###"
	 [9] "   ###   # ## ##  #### # ##"
	[10] "    ### ##### ##    # #####"
	[11] " ##### #   ##  ##### #   ##"
	[12] "____________________________"
	[13] ""
	[14] "SAGA Version: 2.2.2"
	[15] ""
	[16] "____________________________"
	[17] "library path:\t/usr/local/lib/saga/"
	[18] "library name:\tlibio_gdal"
	[19] "library     :\tGDAL/OGR"
	[20] "tool        :\tGDAL: Import Raster"
	[21] "author      :\tO.Conrad (c) 2007 (A.Ringeler)"
	[22] "processors  :\t4 [4]"
	[23] "____________________________"
	[24] ""
	[25] ""
	[26] "Usage: saga_cmd io_gdal 0 [-GRIDS <str>] [-FILES <str>] [-TRANSFORM <str>] [-INTERPOL <str>]"
	[27] "  -GRIDS:<str>    \tGrids"
	[28] "\tGrid list (output)"
	[29] "  -FILES:<str>    \tFiles"
	[30] "\tFile path"
	[31] "  -TRANSFORM:<str>\tTransformation"
	[32] "\tBoolean"
	[33] "\tDefault: 1"
	[34] "  -INTERPOL:<str> \tInterpolation"
	[35] "\tChoice"
	[36] "\tAvailable Choices:"
	[37] "\t[0] Nearest Neighbor"
	[38] "\t[1] Bilinear Interpolation"
	[39] "\t[2] Inverse Distance Interpolation"
	[40] "\t[3] Bicubic Spline Interpolation"
	[41] "\t[4] B-Spline Interpolation"
	[42] "\tDefault: 4"
	attr(,"status")



## Function sagaModuleCmd

The function ''sagaModuleCmd'' returns the raw command line for the addressed module and/or algorithm.

	
	#' sagaModuleCmd
	#'@description gi-ws-04-1 MOC - Advanced GIS (T. Nauss, C. Reudenbach)
	#' get the raw command line string from the saga_cmd call
	#'
	#' usage: rawCmd<-sagaModuleCmd("name_of_SAGA_module","number_of_algorithm")
	#' example import gdal raster:  sagaModuleCmd("io_gdal","0")
	#'
	#'#'@return the raw command from the currently linked SAGA binary for the requested module
	#'
	#'@param module name of the saga module
	#'@param algorithm number or name of algorithm
	#'
	
	
	
	sagaModuleCmd<- function(module,algorithm) {
	  options(warn=-1)
	  t<- sagaModuleHelp(module,algorithm)
	  options(warn=0)
	  cmd<- unique (grep(paste("Usage:",collapse="|"), t, value=TRUE))
	  cmd<- substr(cmd, which(strsplit(cmd, '')[[1]]==':')+2, nchar(cmd))
	  return(cmd)
	}
	

For example if you need the raw command line call for the ''io_gdal 0'' algorithm you can do this from R by using the '' sagaModuleCmd'' function as follows.

	
	sagaModuleCmd("io_gdal","0")
	
	[1] "saga_cmd io_gdal 0 [-GRIDS <str>] [-FILES <str>] [-TRANSFORM <str>] [-INTERPOL <str>]"





