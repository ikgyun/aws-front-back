# ssh -i "ickgyun-webpc.pem" ubuntu@ec2-13-58-201-53.us-east-2.compute.amazonaws.

sudo apt-get install nginx
도중에 y

설치끝

cd /etc/nginx



1. nginx.conf : 설정파일 (text파일)
2. sites-available: (폴더) 얘는 설정파일 저장소.
ex) 변수선언해서 내용을 입력만 받은상태 arr = [1,2,3,4,5,6,7,8,9]

3. sites-enabled: (폴더) 얘는 설정파일을 실행시키는 아이입니다.
    ex) arr[0] // 1
        arr[2] // 3
윈도우로 -> 바로가기로 만들어서 실행시킵니다. -> 심볼릭 링크(바로가기)

sites-avavilabel > 설정파일을 만들고
sites-enabled > 바로가기 셋팅하기

nginx 실행

vi 많이 쓸거임.

cp 폴더나 파일을 복사하는거
cp [기존디렉토리] [변경할디렉토리]
mv [기존디렉토리] [변경할디렉토리]
ln -s [기존디렉토리] [바로가기만들디렉토리]

mv 폴더나 파일을 이동시키는거

unix, linux, window
유료   무료    유료
<- 프리웨어

계정에 따른권한들이 잘성정되었있다.

cp -r [기존디렉토리] [변경할디렉토리]

sudo cp -r /etc/nginx/sites-available  /etc/nginx/sites-available-backup

sudo cp -r /etc/nginx/sites-available  /etc/nginx/sites-enabled-backup

/etc/nginx

cd sites-available
sudo rm default // 파일이하나뿐이라서 옵션안적어줘도됨
cd sites-enable
sudo rm default

여기까지 환경설정 30% 

vi : 파일이 있으면 파일을 읽고 없으면 생성함.

sudo vi myapp.conf

server {
        listen 80;                          //포트번호
        location / {                        //uri가 뭐냐 "/"
        root /home/ubuntu/www               //내가 실행시킬 파일 경로
        index index.html index.html;        //내가 실행시킬 파일명
        try_files $uri /index.html;         //http://localhost:3000/about 링크이동막으려고
        }
}


# 바로가기 만들기
cp [기존디렉토리] [변경할디렉토리]
mv [기존디렉토리] [변경할디렉토리]
ln -s [기존디렉토리] [바로가기만들디렉토리]

/etc/nginx/sites-available
myapp.conf

./myapp.conf

sudo ln -s /etc/nginx/sites-available/myapp.conf /etc/nginx/sites-enabled/myapp.conf //링크걸기

/etc/nginx or cd ..

sudo nginx -t 로 확인 successful 뜨면 됨.

sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx

start 이후 해당아이피값을 주소창에 검색하면 설ㅊ
http://13.58.201.53/



--------------------------------21/07/21

cd /etc/nginx

ls -al / sites-available 폴더확인

cd sites-available

sudo vi myapp.conf

/home/ubuntu/ www <-- 폴더생성

www 안에들어가서 index.html 만들거다,

cp mv ln
mkdir 폴더생성

cd ~ , mkdir www, ls, www폴더생성됨. cd www, ls, vi index.html 파일생성
i로 hello nginx! 쓰고저장!!

ps -ef | grep nignx


# 오늘 지금까지 한거 다시 할때 오류났을 때

myapp.conf <-- 이아이가 잘 설정되었는지 봐야한다.

cd ..
cd sites-available
ls -al
myapp.conf 잘 있는지 확인

sudo vi myapp.conf 오타있으면 500 
sudo systemctl status nginx 치면 어디가 오타인지 친절히 알려줌.

rm
mv
cp
ln
vi
cd
ls -al
ps -ef | grep [찾을프로세스명]
kill -9 [pid]
pwd

폴더구조
cd ~
cd /

도메인 연결
ingoos.com 대여 1년 3년
money 13500 1년

cd front # [경로확인!]
npm i


npm run build  ==> dist 파일 생성

webpack 파일, components 폴더 가져와서 npm run dev 하고 localhost:8080에서 화면 확인

webpack이 dist 폴더 만들어줌.

webpack이란 아이는 합쳐주는 아이다람쥐

   "dev": "webpack server --env development", npm run dev는 이 스크립트를실행시킴.

devserver 발동. devserver는 build를 auto로 실행시켜줌

back에서 npm install cors 설치  