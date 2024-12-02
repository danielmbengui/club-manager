import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
/*
{
  "type": "service_account",
  "project_id": "playpadapp-13dee",
  "private_key_id": "8eec0448ebd05da9a8d0ca1fc8cf9b130d8bb11a",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDKqrT9ms80LYvn\nmNwqLVv/J37VfdxJ81vMRh7hOPKd1h37Q5EjuZojAK/mVcwYiz+XdjnOhrSn/B4F\n/I/Rsl51fkBQhvRTJaYCFhaxpNU0/ny4vZQVBNE7PGKwLLLZ73bFLhIyqJryI1M9\ndkaSz1Fj9TaJ2aS3acCWrBZDXxHxlhjeMuPAhZKZhsB2M+7RiqzMveHx2LCRLTph\nINNISP/z6HPD/K9tdQ+nacLHZXhW4A6flPdKbmVlBX57+Qc0V1MV+63UjqGVfuH9\nCKhuHd6SdiTVrJgoDCm4W7b8ZX7RppqkCfZJCV1UIX5tP3pdq9kyaGuifJmnq1gc\nnwatfUw3AgMBAAECggEAFzT5+apO/MIUaaY628eK58pNf0PkxEEOK3OCGLctLP62\nOy3vAkDAEi8DdWQwtUTIuN7MWsZZDH1VsMjNbS04HMsisTXq51SB0G5YFepykZls\njbkDqm59SQOup07PAh6mIokWg1+EMqLx5rFS/n+n6cLMBnf6IRiGeZpmCDvsMZYS\nrVACpPBcl7282XCjjeI0tDJJsrkoxJakhbH0KKZS0pBHHYH7hHoc4q8nDO5Hyj/x\nOvzUXTe7GRRMzGvzaeQNJyl/LrJRu1zKtCx0GnBdz52dwepQlKOkh7Z/R1l7a/JL\n8cPWpl6Q6/+7lNtIqTvlW9Uj21M+yRAFNjnGM8LSvQKBgQDxT0KyGPms3Xp2WbL4\nRnlWNG1RI4+0oWF3DfAM4Ob9a1q6P542X50eI5ojqdRJl5hahQttxgcrbpMHQhCu\nSCB++yXf1G1xwthdRpIBx5tCwDwvmlv/6y6hO7hPZBq3G/4p8C4A7XJM5rzmcTIM\n13y4+3h+aXSZbpkeU9mRpS6JgwKBgQDXATXAZshyWCMf/jHjvwv/IgdUNDO/yYqa\niBD4QZp8FNbfpUAg7MRD1g5LwgOSk9RVoWaCIVG1HdnZU8YRzYOHojCeUjjhcT2I\np2oSKSnbBBFZ1Fe5cr0wOYmQgF6+c00OO9LNUblfLLWtXsv28n2QsaiFn4l0lqY/\nx5ypHyDYPQKBgHLos3Hrwrk2nmJNRJRFuvH59TR2IrB5SNhQosb/Mf/rZ0DZmpV5\n4m+/tF7XOGfy8HHqeQ7FBhUAirMiGp9jaVYOcnKrzZImnrGMMWr3ik+3CvIAJ18u\ntv3AWnwzxyT7B4UhAkceyxcjqUBzFspWsuXDmhVYUlXd/LwcYbahWg/RAoGBAMzB\nhTwnZmumzkSwozh+f+FIuewSDtpuCIakYGzcpU/X1M6GJK12bm8gEttI+HgGOugV\n3na9Xn/63rXe1zmrG8D20BBmw27Hlk9nCFglRYwjspZ259hfkha0JPMtnY0IZ3DP\nvjD0zHH8NUTXi60xQC2lU5V12sTil48T/Xj+gRwNAoGAaCLrbR77pjVO4Qubbhw/\nkl1IGeeJPDG3KUG7k24dvdbx9pLD+JyhU5qv8HSj9rpr6CXg0LgjHgH5V9qbtDqL\njO0wIl7XqDBaKxeHCgPBLU/k7TaudL38OtTJE8F7ZBeWTw0n7rQomnn93jAXxqOf\nFQkrXZ/vWbc4fm5Wl7P+tDc=\n-----END PRIVATE KEY-----\n",
  "client_email": "playpadapp-13dee@appspot.gserviceaccount.com",
  "client_id": "110546704452674305105",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/playpadapp-13dee%40appspot.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
*/
const client = new SecretManagerServiceClient({
  credentials: {
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDKqrT9ms80LYvn\nmNwqLVv/J37VfdxJ81vMRh7hOPKd1h37Q5EjuZojAK/mVcwYiz+XdjnOhrSn/B4F\n/I/Rsl51fkBQhvRTJaYCFhaxpNU0/ny4vZQVBNE7PGKwLLLZ73bFLhIyqJryI1M9\ndkaSz1Fj9TaJ2aS3acCWrBZDXxHxlhjeMuPAhZKZhsB2M+7RiqzMveHx2LCRLTph\nINNISP/z6HPD/K9tdQ+nacLHZXhW4A6flPdKbmVlBX57+Qc0V1MV+63UjqGVfuH9\nCKhuHd6SdiTVrJgoDCm4W7b8ZX7RppqkCfZJCV1UIX5tP3pdq9kyaGuifJmnq1gc\nnwatfUw3AgMBAAECggEAFzT5+apO/MIUaaY628eK58pNf0PkxEEOK3OCGLctLP62\nOy3vAkDAEi8DdWQwtUTIuN7MWsZZDH1VsMjNbS04HMsisTXq51SB0G5YFepykZls\njbkDqm59SQOup07PAh6mIokWg1+EMqLx5rFS/n+n6cLMBnf6IRiGeZpmCDvsMZYS\nrVACpPBcl7282XCjjeI0tDJJsrkoxJakhbH0KKZS0pBHHYH7hHoc4q8nDO5Hyj/x\nOvzUXTe7GRRMzGvzaeQNJyl/LrJRu1zKtCx0GnBdz52dwepQlKOkh7Z/R1l7a/JL\n8cPWpl6Q6/+7lNtIqTvlW9Uj21M+yRAFNjnGM8LSvQKBgQDxT0KyGPms3Xp2WbL4\nRnlWNG1RI4+0oWF3DfAM4Ob9a1q6P542X50eI5ojqdRJl5hahQttxgcrbpMHQhCu\nSCB++yXf1G1xwthdRpIBx5tCwDwvmlv/6y6hO7hPZBq3G/4p8C4A7XJM5rzmcTIM\n13y4+3h+aXSZbpkeU9mRpS6JgwKBgQDXATXAZshyWCMf/jHjvwv/IgdUNDO/yYqa\niBD4QZp8FNbfpUAg7MRD1g5LwgOSk9RVoWaCIVG1HdnZU8YRzYOHojCeUjjhcT2I\np2oSKSnbBBFZ1Fe5cr0wOYmQgF6+c00OO9LNUblfLLWtXsv28n2QsaiFn4l0lqY/\nx5ypHyDYPQKBgHLos3Hrwrk2nmJNRJRFuvH59TR2IrB5SNhQosb/Mf/rZ0DZmpV5\n4m+/tF7XOGfy8HHqeQ7FBhUAirMiGp9jaVYOcnKrzZImnrGMMWr3ik+3CvIAJ18u\ntv3AWnwzxyT7B4UhAkceyxcjqUBzFspWsuXDmhVYUlXd/LwcYbahWg/RAoGBAMzB\nhTwnZmumzkSwozh+f+FIuewSDtpuCIakYGzcpU/X1M6GJK12bm8gEttI+HgGOugV\n3na9Xn/63rXe1zmrG8D20BBmw27Hlk9nCFglRYwjspZ259hfkha0JPMtnY0IZ3DP\nvjD0zHH8NUTXi60xQC2lU5V12sTil48T/Xj+gRwNAoGAaCLrbR77pjVO4Qubbhw/\nkl1IGeeJPDG3KUG7k24dvdbx9pLD+JyhU5qv8HSj9rpr6CXg0LgjHgH5V9qbtDqL\njO0wIl7XqDBaKxeHCgPBLU/k7TaudL38OtTJE8F7ZBeWTw0n7rQomnn93jAXxqOf\nFQkrXZ/vWbc4fm5Wl7P+tDc=\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n'),
    client_email:"playpadapp-13dee@appspot.gserviceaccount.com",
  },
  projectId: "playpadapp-13dee",
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Méthode non autorisée' });
    return;
  }

  try {
    const secretName = 'VLSJINHIeATv4nVi7O4Y'; // Remplacez par votre nom de secret
    const version = 'latest';
    const name = `projects/${"playpadapp-13dee"}/secrets/${secretName}/versions/${version}`;
    
    const [accessResponse] = await client.accessSecretVersion({ name });
    const secretValue = accessResponse.payload.data.toString('utf8');
    const values = JSON.parse(secretValue);
    const clubUid = values.clubUid;
    res.status(200).json({ clubUid: clubUid});
  } catch (error) {
    console.error('Erreur lors de la récupération du secret :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération du secret' });
  }
}
