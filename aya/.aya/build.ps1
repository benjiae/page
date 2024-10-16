Remove-Item -Recurse .pub
aya build
Remove-Item -Recurse ../public/blog
mv .pub/blog ../public/blog