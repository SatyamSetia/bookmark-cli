# bookmark-cli

bookmark-cli is a package that can be used for bookmarking files/folders using CLI. User can navigate to different directories by just using 'bm myDir'.

## Installing
```
npm install -g bookmark-cli
```

## Usage
```
bm [command] [options]
```
_Run above command in command line. For example:_
__bm photos__ _will open file/folder with bookmark name 'photos'_

## Commands
Command | Result
--- | ---
add | Add a new bookmark. NOTE: If you are adding custom path and it contains spaces then enclose it in double quotes.
clean | Delete all existing bookmarks.
remove | Delete a specific bookmark.
show | Show all bookmarks.

### Examples
```
bm photos
- It will open file/folder bookmarked with name 'photos'.
```

```
bm add photos
- It will bookmark current directory with name 'photos'.
```

```
bm add photos D:\MyFolder\path
- It will bookmark custom path 'D:\MyFolder\path' with name 'photos'.
```

```
bm clean
- It will delete all bookmarks.
```

```
bm remove photos
- It will delete bookmark with name 'photos'.
```

```
bm show
- It will list all bookmarks. User can choose any bookmark by using up an down arrow keys. Selecting any bookmark will open that.
```
