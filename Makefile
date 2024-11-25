# Makefile

# Variables
SRC_DIR = ./functions/public/src
PREBUILD_DIR = ./prebuild
DIST_DIR = ./dist
OUTPUT_FILE = sdk.js
COMPILED_FILE = sdk-compiled.js

# Find all JavaScript files in the source directory
JS_FILES = $(wildcard $(SRC_DIR)/*.js)

# Default target
all: $(DIST_DIR)/$(OUTPUT_FILE)

# Rule to compile JavaScript files with Babel
$(PREBUILD_DIR)/$(COMPILED_FILE): $(SRC_DIR)/sdk.js
	@mkdir -p $(PREBUILD_DIR)  # Create the prebuild directory if it doesn't exist
	babel $(SRC_DIR)/sdk.js --out-file $(PREBUILD_DIR)/$(COMPILED_FILE)

# Rule to concatenate JavaScript files
$(DIST_DIR)/$(OUTPUT_FILE): $(PREBUILD_DIR)/$(COMPILED_FILE)
	@mkdir -p $(DIST_DIR)  # Create the dist directory if it doesn't exist
	cat $(PREBUILD_DIR)/$(COMPILED_FILE) > $@

# Clean target to remove the output files
clean:
	rm -f $(PREBUILD_DIR)/$(COMPILED_FILE) $(DIST_DIR)/$(OUTPUT_FILE)
