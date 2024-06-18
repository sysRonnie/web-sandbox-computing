generate_csv() {
  echo "filename,code" > output.csv
  find . -type f ! -name "*.png" | while read -r file; do
    filename=$(echo "$file" | sed 's/"/\\"/g' | sed 's/,/\\,/g')
    code=$(<"$file")
    code=$(echo "$code" | sed 's/"/\\"/g' | sed 's/,/\\,/g' | awk '{printf "%s\\n", $0}')
    echo "\"$filename\",\"$code\"" >> output.csv
  done
}

generate_csv
