SELECT * FROM  (SELECT *, ROW_NUMBER() OVER(PARTITION BY CourierNo ORDER BY Datetime DESC) AS Seq FROM CRR_GPS) H WHERE  Seq = 1 AND CourierNo=