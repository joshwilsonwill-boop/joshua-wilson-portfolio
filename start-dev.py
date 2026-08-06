import subprocess, sys, time

p = subprocess.Popen(
    ['cmd', '/c', 'cd', 'C:/Users/PC/Documents/kimi/workspace/joshua-wilson-portfolio', '&&', 'npx', 'next', 'dev', '--port', '7100'],
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    text=True
)

print('Started Next.js dev server, PID:', p.pid)
time.sleep(5)

# Read initial output
try:
    output = p.stdout.read(2000)
    print(output)
except:
    pass

print('Server should be running at http://localhost:7100')
print('Press Ctrl+C to stop')

try:
    p.wait()
except KeyboardInterrupt:
    p.terminate()
    print('Server stopped')
