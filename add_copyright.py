# Copyright (C) 2025 Adheesh Trivedi <adheeshtrivedi@gmail.com>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU Affero General Public License for more details.

"""
Script to add copyright notice to all TSX, CSS, and HTML files in the project.
Adds to all git tracked files with these extensions.
"""

import os
import subprocess
from pathlib import Path

# Copyright notice text
COPYRIGHT_TEXT = """Copyright (C) 2025 Adheesh Trivedi <adheeshtrivedi@gmail.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details."""

def create_copyright_comment(file_extension):
    """Create the copyright comment based on file extension."""
    if file_extension in ['.tsx', '.ts', '.js', '.jsx', '.css']:
        # CSS and JavaScript-style comments
        lines = COPYRIGHT_TEXT.split('\n')
        comment = "/*\n"
        for line in lines:
            if line.strip():
                comment += f" * {line}\n"
            else:
                comment += " *\n"
        comment += " */\n\n"
        return comment
    elif file_extension in ['.html', '.htm']:
        # HTML comments
        lines = COPYRIGHT_TEXT.split('\n')
        comment = "<!--\n"
        for line in lines:
            comment += f"{line}\n"
        comment += "-->\n\n"
        return comment
    else:
        return None

def has_copyright_notice(content):
    """Check if the file already has a copyright notice."""
    return "Copyright (C) 2025 Adheesh Trivedi" in content

def add_copyright_to_file(file_path):
    """Add copyright notice to a single file."""
    try:
        # Read the current content
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if copyright already exists
        if has_copyright_notice(content):
            print(f"⏭️  Skipped {file_path} (copyright already exists)")
            return False

        # Get file extension
        file_extension = Path(file_path).suffix.lower()

        # Create appropriate comment
        copyright_comment = create_copyright_comment(file_extension)
        if copyright_comment is None:
            print(f"❌ Unsupported file type: {file_path}")
            return False

        # Add copyright to the beginning of the file
        new_content = copyright_comment + content

        # Write the updated content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"✅ Added copyright to {file_path}")
        return True

    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def get_git_tracked_files(extensions):
    """Get all git-tracked files with specified extensions."""
    try:
        # Get all git-tracked files
        result = subprocess.run(['git', 'ls-files'], capture_output=True, text=True, check=True)
        all_tracked_files = result.stdout.strip().split('\n')

        # Filter by extensions
        filtered_files = []
        for file_path in all_tracked_files:
            if file_path:  # Skip empty lines
                file_extension = Path(file_path).suffix.lower()
                if file_extension in extensions:
                    # Convert to absolute path
                    abs_path = os.path.abspath(file_path)
                    if os.path.exists(abs_path):  # Make sure file exists
                        filtered_files.append(abs_path)

        return filtered_files

    except subprocess.CalledProcessError:
        print("❌ Error: This doesn't appear to be a git repository!")
        return []
    except FileNotFoundError:
        print("❌ Error: Git is not installed or not in PATH!")
        return []

def main():
    """Main function to process all files."""
    # Get the current directory (project root)
    root_dir = os.getcwd()
    print(f"🔍 Searching for git-tracked files in: {root_dir}")

    # File extensions to process
    extensions = ['.tsx', '.ts', '.jsx', '.js', '.css', '.html', '.htm']

    # Get all git-tracked files with relevant extensions
    tracked_files = get_git_tracked_files(extensions)

    if not tracked_files:
        print("❌ No relevant git-tracked files found!")
        return

    print(f"📁 Found {len(tracked_files)} git-tracked files to process:")
    for file_path in tracked_files:
        print(f"   - {os.path.relpath(file_path, root_dir)}")

    # Ask for confirmation
    response = input(f"\n🤔 Do you want to add copyright notices to all {len(tracked_files)} files? (y/N): ")
    if response.lower() not in ['y', 'yes']:
        print("❌ Operation cancelled.")
        return

    # Process each file
    print(f"\n🚀 Processing files...")
    success_count = 0
    skip_count = 0
    error_count = 0

    for file_path in tracked_files:
        result = add_copyright_to_file(file_path)
        if result is True:
            success_count += 1
        elif result is False and has_copyright_notice(open(file_path, 'r', encoding='utf-8').read()):
            skip_count += 1
        else:
            error_count += 1

    # Print summary
    print(f"\n📊 Summary:")
    print(f"   ✅ Successfully added: {success_count}")
    print(f"   ⏭️ Skipped (already exists): {skip_count}")
    print(f"   ❌ Errors: {error_count}")
    print(f"   📁 Total processed: {len(tracked_files)}")

if __name__ == "__main__":
    main()