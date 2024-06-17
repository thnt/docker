FROM apache/superset:4.0.1

USER root
RUN pip install holidays==0.25 pyopenssl clickhouse-connect shillelagh 'shillelagh[all]'
USER superset

